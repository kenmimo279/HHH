<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🧠 ทำนายบาคาร่า Vibes วัยรุ่น</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <div class="guide">
      <h2>📘 สูตรการทำนาย</h2>
      <p><strong>สูตรตัวน้อยสุด:</strong> ดูจากฝ่ายที่มีความหลากหลายน้อยกว่าในเค้าไพ่หลักหรือรอง หาตัวที่น้อยที่สุด ดูตำแหน่ง แล้วเปรียบเทียบค่าที่ตำแหน่งเดียวกัน<br>
      - ค่าเหมือนกัน → P<br>
      - ต่างกัน → B</p>
      <p><strong>สูตรตัวมากสุด:</strong> คล้ายกัน แต่ดูตัวมากที่สุด<br>
      - ตำแหน่งเหมือนกัน → P<br>
      - ไม่เหมือนกัน → B</p>
      <p><em>บันทึกผลจริงลง DNA ตั้งแต่รอบที่ 2 เป็นต้นไป</em></p>
    </div>
    <h1>🔮 ทำนายบาคาร่า Style วัยรุ่น</h1>
    <div class="input-area">
      <label>กรอกเค้าไพ่ 6 ตัว (p/b/b/p/p/b หรือ pbpbpb):</label>
      <input id="combinedInput" type="text" placeholder="เช่น p/b/b/p/p/b หรือ pbpbpb">
      <button class="btn-analyze" onclick="analyze()">🔍 ทำนาย</button>
      <div id="predictionResult" class="prediction-summary"></div>
      <div class="btn-group">
        <button class="btn-result" onclick="submitResult('P')">✔ ผลจริง P</button>
        <button class="btn-result banker" onclick="submitResult('B')">✔ ผลจริง B</button>
        <button class="btn-result tie" onclick="submitResult('T')">✔ ผลจริง T</button>
        <button class="btn-control" onclick="undoDNA()">↩ ย้อนกลับ</button>
      </div>
    </div>
    <div class="dna-box">
      <h3>🧬 สถิติ DNA</h3>
      <div class="btn-group">
        <button class="btn-control" onclick="clearDNA()">🧹 ล้าง DNA</button>
      </div>
      <p class="dna-label">สูตรตัวน้อยสุด:</p> <div id="dna1">-</div> <div id="percent1" class="percent-box">-</div>
      <p class="dna-label">สูตรตัวมากสุด:</p> <div id="dna2">-</div> <div id="percent2" class="percent-box">-</div>
    </div>
  </div>
  <script>
    let dna1 = [], dna2 = [], backupDNA = [];
    window.onload = () => {
      const saved = localStorage.getItem('dnaBackup');
      if (saved) {
        const { dna1: d1, dna2: d2 } = JSON.parse(saved);
        dna1 = d1 || []; dna2 = d2 || [];
        renderDNA();
      }
    };
    function getMinOrMaxPos(arr, mode='min') {
      const count = {};
      arr.forEach((v,i)=> count[v]?count[v].push(i):count[v]=[i]);
      const sorted = Object.entries(count).sort((a,b)=>(mode==='min'? a[1].length-b[1].length : b[1].length-a[1].length));
      return sorted[0][1][0];
    }
    function variety(arr){ return new Set(arr).size; }
    function analyze(){
      let input = document.getElementById('combinedInput').value.trim().toLowerCase();
      let raw = input.includes('/')?input.split('/') : input.split('');
      if(raw.length!==6){ document.getElementById('predictionResult').innerText='❌ กรุณากรอกให้ครบ 6 ตัว'; return; }
      const main=raw.slice(0,3), ref=raw.slice(3);
      const target = variety(main)<variety(ref)?main:ref;
      const compare = target===main?ref:main;
      const minPos=getMinOrMaxPos(target,'min'), maxPos=getMinOrMaxPos(target,'max');
      const minResult = target[minPos]===compare[minPos]?'P':'B';
      const maxResult = target[maxPos]===compare[maxPos]?'P':'B';
      document.getElementById('predictionResult').innerHTML=`✅ ตัวน้อยสุด:<strong>${minResult}</strong> | ตัวมากสุด:<strong>${maxResult}</strong>`;
      new Audio('https://freesound.org/data/previews/341/341695_6261194-lq.mp3').play();
      document.getElementById('combinedInput').value='';
    }
    function submitResult(actual){
      let input=document.getElementById('combinedInput').value.trim().toLowerCase();
      let raw=input.includes('/')?input.split('/') : input.split('');
      if(raw.length!==6)return;
      const main=raw.slice(0,3), ref=raw.slice(3);
      const target = variety(main)<variety(ref)?main:ref;
      const compare = target===main?ref:main;
      const minPos=getMinOrMaxPos(target,'min'), maxPos=getMinOrMaxPos(target,'max');
      const minResult=target[minPos]===compare[minPos]?'P':'B';
      const maxResult=target[maxPos]===compare[maxPos]?'P':'B';
      backupDNA.push({dna1:[...dna1],dna2:[...dna2]});if(backupDNA.length>20)backupDNA.shift();
      updateDNA(minResult,maxResult,actual);
    }
    function updateDNA(r1,r2,actual){
      if(dna1.length>=50)dna1.shift(); if(dna2.length>=50)dna2.shift();
      dna1.push(r1===actual?'⚪️':'🔴'); dna2.push(r2===actual?'⚪️':'🔴'); renderDNA();
    }
    function renderDNA(){
      document.getElementById('dna1').innerText=dna1.join('');
      document.getElementById('dna2').innerText=dna2.join('');
      document.getElementById('percent1').innerText=`ความแม่นยำ:${percent(dna1)}|แนวโน้ม:${detectPattern(dna1)}`;
      document.getElementById('percent2').innerText=`ความแม่นยำ:${percent(dna2)}|แนวโน้ม:${detectPattern(dna2)}`;
      localStorage.setItem('dnaBackup',JSON.stringify({dna1,dna2}));
    }
    function percent(arr){let ok=arr.filter(e=>'⚪️'===e).length;return arr.length?((ok/arr.length*100).toFixed(1)+'%'):'-';}
    function detectPattern(arr){const s=arr.map(e=>e==='⚪️'?'O':'X').join('');
      if(/^(O+|X+)$/.test(s))return'มังกรยาว';if(/^(OX){3,}|(XO){3,}$/.test(s))return'ปิงปอง';
      if(/^(OOXX|XXOO)+$/.test(s))return'สองตัดสอง';if(/^(OOX|XXO){2,}$/.test(s))return'สองหนึ่ง';
      if(/^(OXOXOX)$/.test(s))return'สลับยาว';if(/^(OOOX|XXXO)$/.test(s))return'สามตัด';
      if(/^(OXOXO)$/.test(s))return'ปิงปองสั้น';if(/^(OO|XX)(OX|XO)(OO|XX)$/.test(s))return'สองตัดกลาง';
      return'ไม่แน่ชัด';}
    function clearDNA(){dna1=[];dna2=[];backupDNA=[];localStorage.removeItem('dnaBackup');renderDNA();}
    function undoDNA(){const last=backupDNA.pop();if(last){dna1=last.dna1;dna2=last.dna2;renderDNA();}}  
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🧠 ทำนายบาคาร่า Vibes วัยรุ่น</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <div class="guide">
      <h2>📘 สูตรการทำนาย</h2>
      <p><strong>สูตรตัวน้อยสุด:</strong> ดูจากฝ่ายที่มีความหลากหลายน้อยกว่าในเค้าไพ่หลักหรือรอง หาตัวที่น้อยที่สุด ดูตำแหน่ง แล้วเปรียบเทียบค่าที่ตำแหน่งเดียวกัน<br>
      - ค่าเหมือนกัน → P<br>
      - ต่างกัน → B</p>
      <p><strong>สูตรตัวมากสุด:</strong> คล้ายกัน แต่ดูตัวมากที่สุด<br>
      - ตำแหน่งเหมือนกัน → P<br>
      - ไม่เหมือนกัน → B</p>
      <p><em>บันทึกผลจริงลง DNA ตั้งแต่รอบที่ 2 เป็นต้นไป</em></p>
    </div>
    <h1>🔮 ทำนายบาคาร่า Style วัยรุ่น</h1>
    <div class="input-area">
      <label>กรอกเค้าไพ่ 6 ตัว (p/b/b/p/p/b หรือ pbpbpb):</label>
      <input id="combinedInput" type="text" placeholder="เช่น p/b/b/p/p/b หรือ pbpbpb">
      <button class="btn-analyze" onclick="analyze()">🔍 ทำนาย</button>
      <div id="predictionResult" class="prediction-summary"></div>
      <div class="btn-group">
        <button class="btn-result" onclick="submitResult('P')">✔ ผลจริง P</button>
        <button class="btn-result banker" onclick="submitResult('B')">✔ ผลจริง B</button>
        <button class="btn-result tie" onclick="submitResult('T')">✔ ผลจริง T</button>
        <button class="btn-control" onclick="undoDNA()">↩ ย้อนกลับ</button>
      </div>
    </div>
    <div class="dna-box">
      <h3>🧬 สถิติ DNA</h3>
      <div class="btn-group">
        <button class="btn-control" onclick="clearDNA()">🧹 ล้าง DNA</button>
      </div>
      <p class="dna-label">สูตรตัวน้อยสุด:</p> <div id="dna1">-</div> <div id="percent1" class="percent-box">-</div>
      <p class="dna-label">สูตรตัวมากสุด:</p> <div id="dna2">-</div> <div id="percent2" class="percent-box">-</div>
    </div>
  </div>
  <script>
    let dna1 = [], dna2 = [], backupDNA = [];
    window.onload = () => {
      const saved = localStorage.getItem('dnaBackup');
      if (saved) {
        const { dna1: d1, dna2: d2 } = JSON.parse(saved);
        dna1 = d1 || []; dna2 = d2 || [];
        renderDNA();
      }
    };
    function getMinOrMaxPos(arr, mode='min') {
      const count = {};
      arr.forEach((v,i)=> count[v]?count[v].push(i):count[v]=[i]);
      const sorted = Object.entries(count).sort((a,b)=>(mode==='min'? a[1].length-b[1].length : b[1].length-a[1].length));
      return sorted[0][1][0];
    }
    function variety(arr){ return new Set(arr).size; }
    function analyze(){
      let input = document.getElementById('combinedInput').value.trim().toLowerCase();
      let raw = input.includes('/')?input.split('/') : input.split('');
      if(raw.length!==6){ document.getElementById('predictionResult').innerText='❌ กรุณากรอกให้ครบ 6 ตัว'; return; }
      const main=raw.slice(0,3), ref=raw.slice(3);
      const target = variety(main)<variety(ref)?main:ref;
      const compare = target===main?ref:main;
      const minPos=getMinOrMaxPos(target,'min'), maxPos=getMinOrMaxPos(target,'max');
      const minResult = target[minPos]===compare[minPos]?'P':'B';
      const maxResult = target[maxPos]===compare[maxPos]?'P':'B';
      document.getElementById('predictionResult').innerHTML=`✅ ตัวน้อยสุด:<strong>${minResult}</strong> | ตัวมากสุด:<strong>${maxResult}</strong>`;
      new Audio('https://freesound.org/data/previews/341/341695_6261194-lq.mp3').play();
      document.getElementById('combinedInput').value='';
    }
    function submitResult(actual){
      let input=document.getElementById('combinedInput').value.trim().toLowerCase();
      let raw=input.includes('/')?input.split('/') : input.split('');
      if(raw.length!==6)return;
      const main=raw.slice(0,3), ref=raw.slice(3);
      const target = variety(main)<variety(ref)?main:ref;
      const compare = target===main?ref:main;
      const minPos=getMinOrMaxPos(target,'min'), maxPos=getMinOrMaxPos(target,'max');
      const minResult=target[minPos]===compare[minPos]?'P':'B';
      const maxResult=target[maxPos]===compare[maxPos]?'P':'B';
      backupDNA.push({dna1:[...dna1],dna2:[...dna2]});if(backupDNA.length>20)backupDNA.shift();
      updateDNA(minResult,maxResult,actual);
    }
    function updateDNA(r1,r2,actual){
      if(dna1.length>=50)dna1.shift(); if(dna2.length>=50)dna2.shift();
      dna1.push(r1===actual?'⚪️':'🔴'); dna2.push(r2===actual?'⚪️':'🔴'); renderDNA();
    }
    function renderDNA(){
      document.getElementById('dna1').innerText=dna1.join('');
      document.getElementById('dna2').innerText=dna2.join('');
      document.getElementById('percent1').innerText=`ความแม่นยำ:${percent(dna1)}|แนวโน้ม:${detectPattern(dna1)}`;
      document.getElementById('percent2').innerText=`ความแม่นยำ:${percent(dna2)}|แนวโน้ม:${detectPattern(dna2)}`;
      localStorage.setItem('dnaBackup',JSON.stringify({dna1,dna2}));
    }
    function percent(arr){let ok=arr.filter(e=>'⚪️'===e).length;return arr.length?((ok/arr.length*100).toFixed(1)+'%'):'-';}
    function detectPattern(arr){const s=arr.map(e=>e==='⚪️'?'O':'X').join('');
      if(/^(O+|X+)$/.test(s))return'มังกรยาว';if(/^(OX){3,}|(XO){3,}$/.test(s))return'ปิงปอง';
      if(/^(OOXX|XXOO)+$/.test(s))return'สองตัดสอง';if(/^(OOX|XXO){2,}$/.test(s))return'สองหนึ่ง';
      if(/^(OXOXOX)$/.test(s))return'สลับยาว';if(/^(OOOX|XXXO)$/.test(s))return'สามตัด';
      if(/^(OXOXO)$/.test(s))return'ปิงปองสั้น';if(/^(OO|XX)(OX|XO)(OO|XX)$/.test(s))return'สองตัดกลาง';
      return'ไม่แน่ชัด';}
    function clearDNA(){dna1=[];dna2=[];backupDNA=[];localStorage.removeItem('dnaBackup');renderDNA();}
    function undoDNA(){const last=backupDNA.pop();if(last){dna1=last.dna1;dna2=last.dna2;renderDNA();}}  
  </script>
</body>
</html>
