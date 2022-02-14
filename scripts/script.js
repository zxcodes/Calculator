let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

function brightenTheButtonOnKeyBoardInput(key){
  const idObject = new Map();
  // the key is the value of the key that has been pressed,
  // the value is the id for that button
  idObject.set("0","zero");
  idObject.set('1',"one");
  idObject.set("2","two");
  idObject.set("3","three");
  idObject.set("4","four");
  idObject.set("5","five");
  idObject.set("6","six");
  idObject.set("7","seven");
  idObject.set("8","eight");
  idObject.set("9","nine");

  idObject.set("+","plus");
  idObject.set("-","minus");
  idObject.set("*","multiply");
  idObject.set("/","divide");

  idObject.set(".","dot");
  idObject.set("Enter","equals");

  //getting id of the button pressed
  const id = idObject.get(key);

  //if any other key is pressed then return from this function
  if(id===undefined){
    return;
  }

  //getting the button to brighten it
  const button = document.getElementById(id);
  console.log(button);

  //add button press visual effects
  button.style.opacity="0.5";
  button.style.transform = "scale(0.8)";
  button.style.transition = "all 0.1s";

  //undo the effects after 0.1s
  setTimeout(()=>{
    button.style.opacity="1";
    button.style.transform = "scale(1)"

  },100)
}

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  //grabbing the liveScreen
  let res = document.getElementById("result");

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
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    res.value = eval(result.value || null);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    let resultInput = res.value;

    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }

  //brighten the button pressed
  brightenTheButtonOnKeyBoardInput(e.key);
}

// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
  let res = document.getElementById("result");
  if (!res.value) {
    res.value = "";
  }
  res.value += value;
}
// Swaps the stylesheet in order to  achieve dark mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") === lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}
