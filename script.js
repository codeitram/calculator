let var1 = null,
  var2 = null,
  opr = null,
  result = null;

function add(a, b) {
  return Number(a) + Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "/":
      return divide(a, b);

    case "*":
      return multiply(a, b);
  }
}

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", populateDisplay);
});

function populateDisplay(e) {
  let display = document.querySelector(".screen p:last-child");
  // console.log(display.firstChild.data);
  console.log(display.lastChild);
  if (this.value == "C") {
    display.parentNode.remove();
    let cal = document.querySelector(".cal-body");
    let div = document.createElement("div");
    div.className = "screen";
    let p = document.createElement("p");
    p.textContent = "0";
    div.append(p);
    cal.prepend(div);
  }
  //
  else if (this.value == "Backspace") {
    display.removeChild(display.lastChild);
    if (display.textContent == "") display.textContent = 0;
  } else if (
    this.value == "*" ||
    this.value == "/" ||
    this.value == "+" ||
    this.value == "-"
  ) {
    var2 = var1;
    var1 = display.textContent;
    // console.log(var1);
    let screen = document.querySelector(".screen");
    let p = document.createElement("p");
    p.textContent = this.value;
    opr = this.value;

    let p1 = document.createElement("p");
    p1.textContent = "0";
    screen.append(p);
    screen.append(p1);
  } else if (this.value == "=") {
    // if(var1 == null || var2 == null)  {

    // }

    var2 = display.textContent;
    result = operate(opr, var1, var2);
    display.parentNode.remove();
    let cal = document.querySelector(".cal-body");
    let div = document.createElement("div");
    div.className = "screen";
    cal.prepend(div);

    let screen = document.querySelector(".screen");
    let p = document.createElement("p");
    p.textContent = result;
    if (var1 == null || var2 == null || opr == null) p.textContent = "ERROR";
    screen.append(p);
    var1 = null;
    var2 = null;
    opr = null;

    // console.log(result);
  } else {
    if (this.value == ".") {
      if (display.firstChild.data === "0") {
        display.removeChild(display.firstChild);
        display.append("0.");
      } else display.append(this.value);
    } else {
      display.append(this.value);
      if (display.firstChild.data === "0")
        display.removeChild(display.firstChild);
    }
  }
}

document.addEventListener("keydown", (e) => {
  // console.log(e);
  switch (e.key) {
    case "1":
      document.querySelector("button[value = '1']").click();
      break;
    case "2":
      document.querySelector("button[value = '2']").click();
      break;
    case "3":
      document.querySelector("button[value = '3']").click();
      break;
    case "4":
      document.querySelector("button[value = '4']").click();
      break;
    case "5":
      document.querySelector("button[value = '5']").click();
      break;
    case "6":
      document.querySelector("button[value = '6']").click();
      break;
    case "7":
      document.querySelector("button[value = '7']").click();
      break;
    case "8":
      document.querySelector("button[value = '8']").click();
      break;
    case "9":
      document.querySelector("button[value = '9']").click();
      break;
    case "0":
      document.querySelector("button[value = '0']").click();
      break;
    case ".":
      document.querySelector("button[value='.']").click();
      break;
    case "+":
      document.querySelector("button[value='+']").click();
      break;
    case "-":
      document.querySelector("button[value='-']").click();
      break;
    case "*":
      document.querySelector("button[value='*']").click();
      break;
    case "/":
      document.querySelector("button[value='/']").click();
      break;
    case "Backspace":
      document.querySelector("button[value='Backspace']").click();
      break;
    case "Enter":
      document.querySelector("button[value='=']").click();
      break;
    case "=":
      document.querySelector("button[value='=']").click();
      break;
    case "c":
      document.querySelector("button[value='C']").click();
  }
});
