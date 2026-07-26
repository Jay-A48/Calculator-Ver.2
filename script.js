let current = '0';
let previous = '';
let operation = null;
let resetNext = false;

const currEl = document.getElementById('curr');
const prevEl = document.getElementById('prev');

function updateDisplay() {
  currEl.textContent = current;
  prevEl.textContent = previous && operation ? `${previous} ${operation}` : '';
}

function appendNum(num) {
  if (resetNext) {
    current = '0';
    resetNext = false;
  }
  if (num === '.' && current.includes('.')) return;
  if (current === '0' && num !== '.') {
    current = num;
  } else {
    current += num;
  }
  updateDisplay();
}

function chooseOp(op) {
  if (operation !== null) calculate();
  previous = current;
  operation = op;
  resetNext = true;
  updateDisplay();
}

function calculate() {
  if (operation === null || resetNext) return;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  let result;
  switch (operation) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '×': result = prev * curr; break;
    case '÷': result = curr === 0 ? 'Error' : prev / curr; break;
    case '%': result = prev % curr; break;
  }
  current = result.toString();
  operation = null;
  previous = '';
  resetNext = true;
  updateDisplay();
}

function clearAll() {
  current = '0';
  previous = '';
  operation = null;
  resetNext = false;
  updateDisplay();
}

function deleteLast() {
  current = current.length > 1 ? current.slice(0, -1) : '0';
  updateDisplay();
}
