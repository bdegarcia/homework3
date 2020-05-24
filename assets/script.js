// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var length = prompt("Please input desired length, between 8-128 characters");
  var lowerL = confirm("Would you like there to be lowercase letters?");
  var upperL = confirm("would you like uppercase letters?");
  var number = confirm("would you like there to be numbers?");
  var char = confirm("would you like special characters? ex: ! @ # $");
  var passChar = '';
  var passSample = [];
  var length = parseInt(length);

  if (length < 8 || length > 128 ){
    alert("Password must be within 8-128 characters. Please select again.");
    var length = prompt("Please choose a correct length, between 8 and 128 characters.");
    var length = parseInt(length)
  }

  if (lowerL === false && upperL === false && number === false && char == false){
    alert("Please select at least one option of character to include in your password.");
    var lowerL = undefined;
    var upperL = undefined;
    var number = undefined;
    var char = undefined;
    var passSample = undefined;
    generatePassword();
  } else {

  if (lowerL === true){	
    var passChar = 'abcdefghijklmnopqrstuvwxyz';
  }
  if (upperL === true){
    var passChar = passChar + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (number === true){
    var passChar = passChar + '012356789';
  }
  if (char === true){
    var passChar = passChar + '!@#$%&?()';
  }
  for ( var i = 0 ; i < length; i++ ) {
    var passSample = passSample + passChar.charAt(Math.floor(Math.random() * passChar.length));
    console.log(passSample)
    console.log(passSample.length)
  }
  return passSample
}}