const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
var lastNumber = "";
var currentNumber = "";
var isPositive = true;
const toast = document.getElementById("toast");

function calculate(value) {
  value = value.replace('²',"**2")
  value = value.replace("--",'+')
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
  lastNumber = currentNumber;
  currentNumber = "";
  res.value += enteredValue;
  isPositive = true
}

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode ☀️";
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
    
  if(enteredValue == '+' || enteredValue == '-' || enteredValue == '*' || enteredValue == '/'){
      lastNumber = currentNumber;
      currentNumber = "";
      res.value += enteredValue;
      isPositive = true
  }
  else if(enteredValue == 'C'){
      lastNumber = ""
    currentNumber = ""
    res.value = ''
      isPositive = true
  }
  else if(enteredValue == '+/-'){
      res.value = res.value.substring(0, res.value.length - currentNumber.length - (!isPositive ? 1 : 0));
      res.value += currentNumber * (isPositive ? -1 : 1);
      isPositive = !isPositive;
  }
  else if(enteredValue != '%'){
      currentNumber += enteredValue
      res.value += enteredValue;
  }
  else {
      res.value = res.value.substring(0, res.value.length - currentNumber.length);
      enteredValue = lastNumber / 100 * currentNumber * (isPositive ? -1 : 1);
      res.value += enteredValue;
  }
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
    lastNumber = currentNumber;
    currentNumber = "";
    res.value += enteredValue;
    isPositive = true
  } else if (e.key === "-") {
    res.value += "-";
    lastNumber = currentNumber;
    currentNumber = "";
    res.value += enteredValue;
    isPositive = true
  } else if (e.key === "*") {
    res.value += "*";
    lastNumber = currentNumber;
    currentNumber = "";
    res.value += enteredValue;
    isPositive = true
  } else if (e.key === "/") {
    res.value += "/";
    lastNumber = currentNumber;
    currentNumber = "";
    res.value += enteredValue;
    isPositive = true
  }

  //decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(result.value);
    lastNumber = currentNumber;
    currentNumber = "";
    res.value += enteredValue;
    isPositive = true
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
