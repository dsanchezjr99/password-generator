var length
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

function generatePassword() { 

  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  var numberCharacters = confirm(
    "Click 'ok' to include numbers in your password or 'cancel' to not include any numbers."
  );

  var lowercaseCharacters = confirm(
    "Click 'ok' to include lowercase letters in your password or 'cancel' to not include any lowercase letters."
  );

  var uppercaseCharacters = confirm(
    "Click 'ok' to include uppercase letters in your password or 'cancel' to not include any uppercase letters."
  );

  var specialCharacters = confirm(
    "Click 'ok' to include special characters in your password or 'cancel' to not include any special characters."
  );

  //checking
  if (length < 8) {
    alert('Password length must have at least 8 characters');
  }

  if (length > 128) {
    alert('Password length has to be less than 129 characters');
  }

  var randomPassword = ""

  var characterOptions = ""

  if (numberCharacters === true) {
    characterOptions = characterOptions + number;
  }

  if (lowercaseCharacters === true) {
    characterOptions = characterOptions + lowercase;
  }
 
  if (uppercaseCharacters === true) {
    characterOptions = characterOptions + uppercase;
  }
  
  if (specialCharacters === true) {
    characterOptions = characterOptions + specialCharacters;
  }
  
  for (var i = 0; i < length; i++) {
    var randIndex = Math.floor (Math.random() * characterOptions.length);
    var randomChar = characterOptions.charAt(randIndex)
    randomPassword = randomPassword + randomChar
  }

  return randomPassword;
}

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