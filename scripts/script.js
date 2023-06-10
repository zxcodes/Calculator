const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

const operators = ["+", "-", "*", "/"]
let last_num = ""

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
    last_num = calculatedValue.toString()
  }
}

function clearValue(){
  result.value = "";
  last_num = "";
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
  keyboardInputHandler({key:enteredValue})
  //res.value += enteredValue;
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {

  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  if (e.target){
    e.preventDefault();
  }
  //grabbing the liveScreen

  //numbers
  if (isFinite(e.key)){
    res.value += e.key;
    last_num += e.key
  }

  var last_char = res.value[res.value.length-1]

  //operators
  if (operators.includes(e.key)){
    // replace last operator if already exists
    if (operators.includes(last_char)){
      res.value = res.value.slice(0, -1)
    }
    last_num = ""
    res.value += e.key;
  }

  //decimal key
  if (e.key === ".") {
    // allow only one decimal
    if (last_char !== e.key && !last_num.includes(e.key)){
      res.value += e.key;
      last_num += e.key
    }
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
    last_num = last_num.slice(0, -1)
  }
}
