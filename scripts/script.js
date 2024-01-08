const lightTheme = 'styles/light.css'
const darkTheme = 'styles/dark.css'
const sunIcon = 'assets/SunIcon.svg'
const moonIcon = 'assets/MoonIcon.svg'
const themeIcon = document.getElementById('theme-icon')
const res = document.getElementById('result')
const toast = document.getElementById('toast')
const operators = ['+', '-', '*', '/']
const validExpressionRegex = /^(\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$)/

function calculate(value) {
  const calculatedValue = eval(value || null)
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0"
    setTimeout(() => {
      res.value = ''
    }, 1300)
  } else {
    res.value = calculatedValue
  }
}

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById('theme')
  setTimeout(() => {
    toast.innerHTML = 'Calculator'
  }, 1500)
  if (theme.getAttribute('href') === lightTheme) {
    theme.setAttribute('href', darkTheme)
    themeIcon.setAttribute('src', sunIcon)
    toast.innerHTML = 'Dark Mode 🌙'
  } else {
    theme.setAttribute('href', lightTheme)
    themeIcon.setAttribute('src', moonIcon)
    toast.innerHTML = 'Light Mode ☀️'
  }
}

//updated with check(value) function
function check(value) {
  if (
    (!res.value.length && value === '-') ||
    (res.value.length === 1 && res.value === '-' && value !== '-')
  )
    res.value = '-'
  else {
    if (value === '.') {
      let num = res.value
      function checklength(text) {
        return num.split(text)[num.split(text).length - 1]
      }

      if (num.split('.').length === 1) res.value += '.'
      else {
        operators.forEach(operator => {
          if (num.includes(operator)) {
            num = checklength(operator)
          }
        })

        if (num.split('.').length === 1) res.value += value
      }
    } else {
      if (res.value.length) {
        //operators
        let text = res.value

        if (operators.some(item => item === res.value[res.value.length - 1]))
          text = res.value.slice(0, res.value.length - 1)

        res.value = text + value
      }
    }
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) res.value = ''
  if (isNaN(enteredValue) && [...operators, '.'].some(item => item === enteredValue))
    check(enteredValue)
  else res.value += enteredValue
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener('keydown', keyboardInputHandler)

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault()
  //grabbing the liveScreen

  //numbers
  if (e.key === '0') {
    res.value += '0'
  } else if (e.key === '1') {
    res.value += '1'
  } else if (e.key === '2') {
    res.value += '2'
  } else if (e.key === '3') {
    res.value += '3'
  } else if (e.key === '4') {
    res.value += '4'
  } else if (e.key === '5') {
    res.value += '5'
  } else if (e.key === '6') {
    res.value += '6'
  } else if (e.key === '7') {
    res.value += '7'
  } else if (e.key === '7') {
    res.value += '7'
  } else if (e.key === '8') {
    res.value += '8'
  } else if (e.key === '9') {
    res.value += '9'
  }

  if (isNaN(e.key) && [...operators, '.'].some(item => item === e.key)) check(e.key)

  //decimal key
  // if (e.key === '.') {
  //   res.value += '.'
  // }

  //press enter to see result
  if (e.key === 'Enter') {
    calculate(result.value)
  }

  //backspace for removing the last input
  if (e.key === 'Backspace') {
    const resultInput = res.value
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1)
  }
}
