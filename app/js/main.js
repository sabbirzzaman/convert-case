// Select All Elements
const textInput = document.querySelector("textarea");
const textOutput = document.querySelector(".case-output");
const defaultcaseBtn = document.querySelector(".default");
const lowcaseBtn = document.querySelector(".lowcase");
const upcaseBtn = document.querySelector(".upcase");
const capcaseBtn = document.querySelector(".capcase");
const clearBtn = document.querySelector(".clear");
const copyBtn = document.querySelector(".copy");
const allBtn = document.getElementsByClassName("btn");

// EventListener
defaultcaseBtn.addEventListener("click", deafultCase);
lowcaseBtn.addEventListener("click", convartLowCase);
upcaseBtn.addEventListener("click", convartUpperCase);
capcaseBtn.addEventListener("click", convartCapitalizeCase);
copyBtn.addEventListener("click", copyToClipboard);
clearBtn.addEventListener("click", clearText);

// Chnage button text
for (var i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener(
    "click",
    (function (clicked) {
      return function () {
        if (!clicked) {
          var last = this.innerHTML;
          this.innerHTML = "🥳";
          clicked = true;
          setTimeout(
            function () {
              this.innerHTML = last;
              clicked = false;
            }.bind(this),
            800
          );
        }
      };
    })(false),
    this
  );
}

// Function
function deafultCase() {
  textOutput.innerHTML = textInput.value;
}

function convartLowCase() {
  const lowerCase = textInput.value.toLowerCase();
  textOutput.innerHTML = lowerCase;
}

function convartUpperCase() {
  const upperCase = textInput.value.toUpperCase();
  textOutput.innerHTML = upperCase;
}

function convartCapitalizeCase() {
  const capitalizeText = textInput.value;
  textOutput.classList.add("capitalize");
  textOutput.innerHTML = capitalizeText;
}

function copyToClipboard() {
  navigator.clipboard.writeText(textOutput.innerHTML);
}

function clearText(event) {
  event.preventDefault();
  textInput.value = "";
  textOutput.innerHTML = "// Write your text and click those buttons and let's gooo! 🚀";
}
