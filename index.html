<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Baccarat Prediction Youth</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>📘 สูตรการทำนาย</h2>
    <ul>
      <li>สูตรตัวน้อยสุด: หาตำแหน่งตัวน้อยสุดในเค้าไพ่หลัก เทียบกับรอง ตรงตำแหน่ง
        <ul><li>เหมือนกัน → ทาย P</li><li>ต่างกัน → ทาย B</li></ul>
      </li>
      <li>สูตรตัวมากสุด (ใหม่): หาตำแหน่งตัวมากสุดในหลัก → ดูค่าที่ตำแหน่งนั้นในรอง
        <ul>
          <li>ถ้าค่าทั้งหมดในหลักเหมือนกันหมด & ในรองเหมือนกันหมด</li>
          <li>ถ้าค่าของหลักกับรอง (ตัวอย่างแรก) **ไม่เหมือนกัน** → แทง P</li>
          <li>ถ้าเหมือนกัน → แทง B</li>
          <li>ถ้าไม่ครบเงื่อนไข → แทง B</li>
        </ul>
      </li>
      <li>ถ้าเค้าไพ่หลักเหมือนกันหมด ใช้เค้าไพ่รองแทน</li>
    </ul>
    <hr>
    <label>กรอกเค้าไพ่ 6 ตัว (p/b/p/b/p/b หรือ pbpbpb):</label>
    <input id="combinedInput" type="text" placeholder="เช่น pbpppb หรือ p/b/p/p/p/b">
    <button class="btn-analyze" onclick="analyze()">🔍 ทำนาย</button>
    <div id="predictionResult" class="prediction-summary"></div>
    <div class="btn-group">
      <button class="btn-result" onclick="submitResult('P')">✔ ผลจริง P</button>
      <button class="btn-result banker" onclick="submitResult('B')">✔ ผลจริง B</button>
      <button class="btn-result tie" onclick="submitResult('T')">✔ ผลจริง T</button>
      <button class="btn-control" onclick="undoDNA()">↩ ย้อนกลับ</button>
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
    function getAllMaxPositions(arr) {
      const count = {};
      arr.forEach((v, i) => count[v] ? count[v].push(i) : count[v] = [i]);
      const maxCount = Math.max(...Object.values(count).map(pos => pos.length));
      const maxKeys = Object.keys(count).filter(k => count[k].length === maxCount);
      let positions = [];
      maxKeys.forEach(k => positions = positions.concat(count[k]));
      return positions;
    }
    function isAllSame(arr) {
      return arr.every(x => x === arr[0]);
    }
    function getMinOrMaxPos(arr, mode='min') {
      const count = {};
      arr.forEach((v,i)=> count[v]?count[v].push(i):count[v]=[i]);
      const sorted = Object.entries(count).sort((a,b)=>(mode==='min'? a[1].length-b[1].length : b[1].length-a[1].length));
      return sorted[0][1][0];
    }
    function analyze(){
      let input = document.getElementById('combinedInput').value.trim().toLowerCase();
      let raw = input.includes('/')?input.split('/') : input.split('');
      if(raw.length!==6){ document.getElementById('predictionResult').innerText='❌ กรุณากรอกให้ครบ 6 ตัว'; return; }
      let main=raw.slice(0,3), ref=raw.slice(3);
      if(isAllSame(main)) [main, ref] = [ref, main];
      // ตัวมากสุด (ใหม่)
      const maxPosArr = getAllMaxPositions(main);
      const mainMaxValues = maxPosArr.map(idx => main[idx]);
      const refMaxValues = maxPosArr.map(idx => ref[idx]);
      let maxResult = "-";
      if(isAllSame(mainMaxValues) && isAllSame(refMaxValues)) {
        maxResult = (mainMaxValues[0] !== refMaxValues[0]) ? "P" : "B";
      } else {
        maxResult = "B";
      }
      // ตัวน้อยสุด
      const minPos=getMinOrMaxPos(main,'min');
      const minResult = main[minPos]===ref[minPos]?'P':'B';
      document.getElementById('predictionResult').innerHTML=`✅ ตัวน้อยสุด:<strong>${minResult}</strong> | ตัวมากสุด:<strong>${maxResult}</strong>`;
      new Audio('https://freesound.org/data/previews/341/341695_6261194-lq.mp3').play();
    }
    function submitResult(actual){
      let input=document.getElementById('combinedInput').value.trim().toLowerCase();
      let raw=input.includes('/')?input.split('/') : input.split('');
      if(raw.length!==6)return;
      let main=raw.slice(0,3), ref=raw.slice(3);
      if(isAllSame(main)) [main, ref] = [ref, main];
      const maxPosArr = getAllMaxPositions(main);
      const mainMaxValues = maxPosArr.map(idx => main[idx]);
      const refMaxValues = maxPosArr.map(idx => ref[idx]);
      let maxResult = "-";
      if(isAllSame(mainMaxValues) && isAllSame(refMaxValues)) {
        maxResult = (mainMaxValues[0] !== refMaxValues[0]) ? "P" : "B";
      } else {
        maxResult = "B";
      }
      const minPos=getMinOrMaxPos(main,'min');
      const minResult = main[minPos]===ref[minPos]?'P':'B';
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
