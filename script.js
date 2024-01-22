// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  
//*Length of password, At least 8 characters but no more than 128.

  var lowerCase = "Would you like to include lowercase letters?";
   Lowercase = confirm(lowerCase);
  var uperCase = "Would you like to include uppercase letters?";
   Uppercase = confirm(uperCase);
  var numeric = "Would you like to include numeric characters?";
   Numeric = confirm(numeric);
  var splChar = "Would you like to include special characters?";
   specialChar = confirm(splChar);
}
//*Code should validate for each input and at least one character type should be selected
  
  
// Function for getting a random element from an array
function getRandom(arr) {
  return text.arr[Math.floor(Math.random() * arr.length)];
  
}

// Function to generate password with user input
function generatePassword() {
  
var pwLength = prompt("Enter the length of the password (between 8 and 128 characters):");
if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return;
}
getPasswordOptions();

var selectArr = [];
var text = "";

if (!Lowercase && !Uppercase && !Numeric && !specialChar) {
  alert("Please input and at least one character type should be selected.");
  selectArr =[];
  return;
}
else {

    if (Lowercase == true) {
      selectArr = selectArr.concat(lowerCasedCharacters);
    }
    if (Uppercase == true) {
      selectArr = selectArr.concat(upperCasedCharacters);
    }
    if (Numeric == true) {
      selectArr = selectArr.concat(numericCharacters);
    }
    if (specialChar == true) {
      selectArr = selectArr.concat(specialCharacters);
    }
}
for (var i = 0; i < pwLength; i++) 
    text += selectArr[Math.floor(Math.random() * selectArr.length)];
   //{text += getRandom();} tried to call the getRandom function, but something missing
   return text;
  
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);