let display = document.getElementById("display");

function press(value) {
  display.value += value;
}

function pressOperator(op) {
  let lastChar = display.value.slice(-1);

  if (display.value === "") return;

  
  if ("+-*/".includes(lastChar)) return;

  display.value += op;
}

function delChar() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let result = eval(display.value);
    if (!isNaN(result)) {
      display.value = result;
    }
  } catch (e) {
    display.value = "Error";
  }
}
