// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialChar = ["!@#$%^&*()"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var passwordFinal = 0;
var ifLowerCase = null;
var ifUpperCase = null;
var ifSpecialChar = null;
var ifNumeric = null
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // All The Logic
  var passwordLength = askPasswordLength();
  if (passwordLength !== null) {
    ifLowerCase = confirm("Do you want lowercase letters in your password?");
    ifUpperCase = confirm("Do you want uppercase letters in your password?");
    ifSpecialChar = confirm("Do you want special characters in your password?");
    ifNumeric = confirm("Do you want numbers in your password?");

    //insert values into password function
    passwordFinal = insertCriteria(passwordLength);
    
  }else{
    passwordFinal = "";
  }
  console.log(passwordFinal);
  return passwordFinal;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function insertCriteria(length) {

  console.log(length);

  var password = "";
  var counter = 0;
  var number = 0;
  var randomNumber = 0;

  // randomNumber = getRandomNumLetters(number);
  // password = password + lowerCase[randomNumber];
  // console.log("password: " + password);

  for (i = 0; i < length; i++) {
    if (ifLowerCase) {
      randomNumber = getRandomNumLetters(number);
      password = password + lowerCase[randomNumber];
      console.log("password " + i + " :" + password);
    }
    // if (ifUpperCase) {
    //   randomNumber = getRandomNumLetters(number);
    //   password = password + upperCase[randomNumber];
    // }
    // if (ifSpecialChar) {
    //   randomNumber = getRandomNum(number);
    //   password = password + specialChar[randomNumber];
    // }
    // if (ifNumeric) {
    //   randomNumber = getRandomNum(number);
    //   password = password + randomNumber;
    // }
    // console.log("inloop " + length);
    // console.log("inloop " + password);
  }
  console.log("outloop " + length);
  return password;
}

function getRandomNumLetters(random) {

  random = Math.floor(Math.random() * 24);
  return random;
}

function getRandomNum(random) {

  random = Math.floor(Math.random() * 10);
  return random;
}

function askPasswordLength() {
  var passwordLength = prompt("How many characters in your password?");
  
  return passwordLength;
}


// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// arrays
// var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
// var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// var specialCharacters = ["!@#$%^&*()"];
// var numeric = [0,1,2,3,4,5,6,7,8,9];


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// - conditionals
// var password = [];
// var ifLowerCase = confirm("Do you want lowercase letters in your password?");
// var ifUpperCase = confirm("Do you want uppercase letters in your password?");
// var ifSpecialChar = confirm("Do you want special characters in your password?");
// var ifNumeric = confirm("Do you want numbers in your password?");

// for(i = 0; i < passwordlength; i++){ 
//     // i = random generator
//     if(ifLowerCase){
//       password = 
//     }
// }

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// function generatePassword

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page