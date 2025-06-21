
let dna1 = [];
let dna2 = [];
let backupDNA = [];

window.onload = () => {
  const saved = localStorage.getItem('dnaBackup');
  if (saved) {
    const { dna1: d1, dna2: d2 } = JSON.parse(saved);
    dna1 = d1 || [];
    dna2 = d2 || [];
    renderDNA();
  }
};

function getMinOrMaxPos(arr, mode = 'min') {
  const count = arr.reduce((acc, val, i) => {
    acc[val] = acc[val] ? [...acc[val], i] : [i];
    return acc;
  }, {});
  const sorted = Object.entries(count).sort((a, b) =>
    mode === 'min' ? a[1].length - b[1].length : b[1].length - a[1].length
  );
  return sorted[0][1][0];
}

function variety(arr) {
  return new Set(arr).size;
}

function analyze() {
  const raw = document.getElementById("combinedInput").value.trim().toLowerCase().split("/");
  if (raw.length !== 6) {
    document.getElementById("predictionResult").innerText = "กรุณากรอกให้ครบ 6 ตัว เช่น p/b/b/p/p/b";
    return;
  }
  const main = raw.slice(0, 3);
  const ref = raw.slice(3);
  const target = variety(main) < variety(ref) ? main : ref;
  const compare = target === main ? ref : main;

  const minPos = getMinOrMaxPos(target, 'min');
  const maxPos = getMinOrMaxPos(target, 'max');

  const minResult = target[minPos] === compare[minPos] ? 'P' : 'B';
  const maxResult = target[maxPos] === compare[maxPos] ? 'P' : 'B';

  document.getElementById("predictionResult").innerHTML =
    `สูตรตัวน้อยสุด: <strong>${minResult}</strong> | สูตรตัวมากสุด: <strong>${maxResult}</strong>`;

  document.getElementById("combinedInput").value = "";
}

function submitResult(actual) {
  const raw = document.getElementById("combinedInput").value.trim().toLowerCase().split("/");
  if (raw.length !== 6) return;
  const main = raw.slice(0, 3);
  const ref = raw.slice(3);
  const target = variety(main) < variety(ref) ? main : ref;
  const compare = target === main ? ref : main;

  const minPos = getMinOrMaxPos(target, 'min');
  const maxPos = getMinOrMaxPos(target, 'max');

  const minResult = target[minPos] === compare[minPos] ? 'P' : 'B';
  const maxResult = target[maxPos] === compare[maxPos] ? 'P' : 'B';

  backupDNA.push({ dna1: [...dna1], dna2: [...dna2] });
  if (backupDNA.length > 20) backupDNA.shift();

  updateDNA(minResult, maxResult, actual);
}

function updateDNA(result1, result2, actual) {
  if (dna1.length >= 50) dna1.shift();
  if (dna2.length >= 50) dna2.shift();
  dna1.push(result1 === actual ? '⚪️' : '🔴');
  dna2.push(result2 === actual ? '⚪️' : '🔴');
  renderDNA();
}

function renderDNA() {
  document.getElementById('dna1').innerText = dna1.join('');
  document.getElementById('dna2').innerText = dna2.join('');
  document.getElementById('percent1').innerText = `ความแม่นยำ: ${percent(dna1)} | แนวโน้ม: ${detectPattern(dna1)}`;
  document.getElementById('percent2').innerText = `ความแม่นยำ: ${percent(dna2)} | แนวโน้ม: ${detectPattern(dna2)}`;
  localStorage.setItem('dnaBackup', JSON.stringify({ dna1, dna2 }));
}

function percent(arr) {
  let ok = arr.filter(e => e === '⚪️').length;
  return arr.length ? `${((ok / arr.length) * 100).toFixed(1)}%` : '-';
}

function detectPattern(arr) {
  const mapped = arr.map(e => e === '⚪️' ? 'O' : 'X');
  const str = mapped.join('');
  if (/^(O+|X+)$/.test(str)) return 'มังกรยาว';
  if (/^(OX){3,}$|^(XO){3,}$/.test(str)) return 'ปิงปอง';
  if (/^(OOXX|XXOO){1,}/.test(str)) return 'สองตัดสอง';
  if (/^(OOX|XXO){2,}/.test(str)) return 'สองหนึ่ง';
  if (/^(OXOXOX)$/.test(str)) return 'สลับยาว';
  if (/^(OOOX|XXXO)$/.test(str)) return 'สามตัด';
  if (/^(OXOXO)$/.test(str)) return 'ปิงปองสั้น';
  if (/^(OO|XX)(OX|XO)(OO|XX)$/.test(str)) return 'สองตัดกลาง';
  return 'ไม่แน่ชัด';
}

function clearDNA() {
  dna1 = [];
  dna2 = [];
  backupDNA = [];
  localStorage.removeItem('dnaBackup');
  renderDNA();
}

function undoDNA() {
  const last = backupDNA.pop();
  if (last) {
    dna1 = last.dna1;
    dna2 = last.dna2;
    renderDNA();
  }
}
