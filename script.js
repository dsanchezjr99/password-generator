// Assignment code here
var length 
var lowercase ="abcdefghijklmnopqrstuvwxyz"
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = '0123456789'
var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

// length of password (8-128 Characters)
// type of characters in a password uppercase/lowercase letters, numbers, special characters)
function generatePassword () {

  var length = parseInt(
    prompt('How many characters do you want to include in your password')
  )

  var lowercaseCharacters = confirm (
    "CLick 'ok' to include lowercase characters inside your password or 'cancel' to exclude them"
  )

var uppercaseCharacters = confirm(
  " Click 'ok' to include uppercase characters inside your password or 'cancel' to exclude them"
  )

  var numbersCharacters = confirm(
    "Click 'ok' to include numbers inside your password or 'cancel' to exclude them"
  )

  var punctuationCharacters = confirm(
    " Click 'ok' to include punctuation inside your password or 'cancel' to exclude them"
  )


  // password options and if statements
  if ( length < 8 ) {
  alert ( 'Password length should be at least 8 characters long');
  }

  if ( length > 128 ) {
  alert ( 'Password length should be less than 129 characters long');
  }

  var randomPassword = ""
  var characterOptions = ""

  if (numbersCharacters === true) {
  characterOptions = characterOptions + numbers;
  }

  if (lowercaseCharacters === true) {
  characterOptions = characterOptions + lowercase;
  }

  if (uppercaseCharacters === true) {
  characterOptions = characterOptions + uppercase;
  }

  if (punctuationCharacters === true) {
  characterOptions = characterOptions + punctuation;
  }

  for (var i = 0; i < length; i++) {
  var randIndex = Math.floor (Math.random() * characterOptions.length);
  var randomChar = characterOptions.charAt(randIndex)
  randomPassword = randomPassword + randomChar
  }

  return randomPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
