// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var lowerL;
var upperL;
var number;
var char;
var passChar;
var passSample;
var password;

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  length = prompt("Please input desired length, between 8-128 characters");
  lowerL = confirm("Would you like there to be lowercase letters?");
  upperL = confirm("Would you like uppercase letters?");
  number = confirm("Would you like there to be numbers?");
  char = confirm("Would you like special characters? ex: ! @ # $");
  passChar = "";
  passSample = "";
  length = parseInt(length);

  if (length < 8 || length > 128) {
    alert("Password must be within 8-128 characters. Please select again.");
    length = prompt(
      "Please choose a correct length, between 8 and 128 characters."
    );
    length = parseInt(length);
  }

  if (
    lowerL === false &&
    upperL === false &&
    number === false &&
    char == false
  ) {
    alert(
      "Please select at least one option of character to include in your password."
    );
    generatePassword();
  } else {
    if (lowerL === true) {
      passChar = "abcdefghijklmnopqrstuvwxyz";
    }
    if (upperL === true) {
      passChar = passChar + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (number === true) {
      passChar = passChar + "012356789";
    }
    if (char === true) {
      passChar = passChar + "!@#$%&?()";
    }
    for (var i = 0; i < length; i++) {
      passSample =
        passSample +
        passChar.charAt(Math.floor(Math.random() * passChar.length));
      console.log(passSample);
      console.log(passSample.length);
    }
  }
  return passSample;
}
