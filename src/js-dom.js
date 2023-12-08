// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

/// TODO: replace this with your code
const button = document.querySelector("#auth");

let loggedIn = false;

button.addEventListener("click", (event) => {
  console.log("clicked");

  loggedIn === false ? (loggedIn = true) : (loggedIn = false);

  loggedIn === false
    ? (event.target.innerText = "Log in")
    : (event.target.innerText = "Log out");
});

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

/// TODO: replace this with your code
const alertForm = document.querySelector("#send-alert");
const alertInput = document.querySelector("#alert-message");

alertForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = alertInput.value;
  alert(message);
  alertInput.value = "";
});

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

/// TODO: replace this with your code
const addItemButton = document.querySelector("#item-adder");
const itemList = document.querySelector("#list");

addItemButton.addEventListener("dblclick", (event) => {
  const newItem = document.createElement("li");
  newItem.innerText = "Item";
  itemList.appendChild(newItem);
});

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

/// TODO: replace this with your code
const colorChangers = document.querySelectorAll(".changes-colors");
const blueButton = document.querySelector("#blue");
const redButton = document.querySelector("#red");

blueButton.addEventListener("click", (event) => {
  colorChangers.forEach((node) => {
    node.className = "blue-text";
  });
});

redButton.addEventListener("click", (event) => {
  colorChangers.forEach((node) => {
    node.className = "red-text";
  });
});

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

/// TODO: replace this with your code
const factorialInput = document.querySelector("#factorial-input");
const factorialForm = document.querySelector("#factorial-calculator");
const factorialResult = document.querySelector("#result");

factorialForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = factorialInput.value;
  let factorialProduct = 1;
  if (userInput != "" && Number(userInput) != NaN && Number(userInput) > 0) {
    let iteration = Number(userInput);
    while (iteration > 1) {
      factorialProduct *= iteration;
      iteration--;
    }
  } else {
    alert("Invalid input. Please try again!");
    factorialInput.value = "";
  }

  factorialResult.innerText = factorialProduct;
  factorialInput.value = "";
});

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

/// TODO: replace this with your code
const recommendForm = document.querySelector("#recommend-word");
const recommendInput = document.querySelector("#word");
const formFeedback = document.querySelector(".form-feedback");

recommendForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const word = recommendInput.value;

  if (word.length > 3) {
    formFeedback.innerText = "Thanks for your submission!";
    formFeedback.style.color = "green";
  } else {
    formFeedback.innerText = "The word must be at least 4 characters long.";
    formFeedback.style.color = "red";
  }

  recommendInput.value = "";
});
