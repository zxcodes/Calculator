let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";

//adding event handler on the document to handle keyboard inputs
document.addEventListener( "keydown", keyboardInputHandler );

//function to handle keyboard inputs
function keyboardInputHandler ( e )
{
  //grabbing the liveScreen
  let res = document.getElementById( "input" );
  let result = document.getElementById( "result" );

  //numbers
  if ( e.key === "0" )
  {
    res.value += "0";
  } else if ( e.key === "1" )
  {
    res.value += "1";
  } else if ( e.key === "2" )
  {
    res.value += "2";
  } else if ( e.key === "3" )
  {
    res.value += "3";
  } else if ( e.key === "4" )
  {
    res.value += "4";
  } else if ( e.key === "5" )
  {
    res.value += "5";
  } else if ( e.key === "6" )
  {
    res.value += "6";
  } else if ( e.key === "7" )
  {
    res.value += "7";
  } else if ( e.key === "7" )
  {
    res.value += "7";
  } else if ( e.key === "8" )
  {
    res.value += "8";
  } else if ( e.key === "9" )
  {
    res.value += "9";
  }

  //operators
  if ( e.key === "+" )
  {
    res.value += "+";
  } else if ( e.key === "-" )
  {
    res.value += "-";
  } else if ( e.key === "*" )
  {
    res.value += "*";
  } else if ( e.key === "/" )
  {
    res.value += "/";
  }

  //decimal key
  if ( e.key === "." )
  {
    res.value += ".";
  }

  //press enter to see result
  if ( e.key === "Enter" )
  {
    result.value = eval( result.value || null );
    result = eval( result.value || null );
  }

  //backspace for removing the last input
  if ( e.key === "Backspace" )
  {
    let resultInput = res.value;

    //remove the last element in the string
    res.value = resultInput.substring( 0, res.value.length - 1 );
  }
}


// Clears the screen on click of C button.
function clearScreen ()
{
  document.getElementById( "input" ).value = "";
}


function enter(){
  let result = document.getElementById( "result" );
  let a = [];
  a = eval(input.value||null); 
  result.value  = a;
  // increase count value when ever this function is called
  console.log(a[2]);

}



//remove the last element in the string using button
function clearEntryScreen ()
{
  let res = document.getElementById( "input" );
  let resultInput = res.value;
  res.value = resultInput.substring( 0, res.value.length - 1 );
}
// Displays entered value on screen.
function liveScreen ( value )
{
  let res = document.getElementById( "input" );
  if ( !res.value )
  {
    res.value = "";
  }
  res.value += value;
}


// Swaps the stylesheet in order to  achieve dark mode.
function changeTheme ()
{
  let darkMode = document.getElementById( "dark-mode" );
  let theme = document.getElementById( "theme" );
  if ( theme.getAttribute( "href" ) === lightTheme )
  {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else
  {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}
