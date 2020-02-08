// Get all the special function buttons

const clearbutton = document.querySelector('input[name="clear"]');

const equalsbutton = document.querySelector('input[name="equals"]');

const sqrtbutton = document.querySelector('input[name="sqrt"]');

const expobutton = document.querySelector('input[name="expo"]');

// Get all the number buttons

const buttons = document.querySelectorAll('input[class="button"');

// Loop through and add event listeners and function to update screen to all the number buttons

buttons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.input.value += button.value;
  });
});

// Add event listeners to the function buttons, 
// and add respective function to calculate and send answer to display

clearbutton.addEventListener("click", () => {
  calculator.input.value = "";
});

equalsbutton.addEventListener("click", () => {
    // Try Catch in case of weird user input like 2++-34
  try {
    output = eval(calculator.input.value);

    // If eval gives back NaN then it was an illegal operation, so we can notify the user here
    if (isNaN(output)) {
      calculator.input.value = "ILLEGAL OPERATION";
    } else {
      calculator.input.value = output;
    }
  } catch (err) {
    calculator.input.value = "ERROR";
  }
});

sqrtbutton.addEventListener("click", () => {
    // Try Catch in case of weird user input like 2++-34, return "ERROR" on screen
  try {
    output = Math.sqrt(calculator.input.value);

    // If eval gives back NaN then it was an illegal operation, so we can notify the user here

    if (isNaN(output)) {
      calculator.input.value = "ILLEGAL OPERATION";
    } else {
      calculator.input.value = output;
    }
  } catch (err) {
    calculator.input.value = "ERROR";
  }
});

// Eval can do exponential if you use ** but we want ^ as the button for the user, so we will just 
// insert ** if user presses the ^ button

expobutton.addEventListener("click", () => {
  calculator.input.value += "**";
});
