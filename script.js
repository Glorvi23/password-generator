// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()";
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
  return passwordFinal;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function insertCriteria(length) {

  var password = "";
  var randomNumber = 0;

  for (i = 0; i < length; i++) {
    
    if (ifLowerCase) {
      randomNumber = getRandomNumLetters();
      password = password + lowerCase[randomNumber];
      i++;
    }
    if (ifUpperCase && (i < length)) {
      randomNumber = getRandomNumLetters();
      password = password + upperCase[randomNumber];
      i++;
    }
    if (ifSpecialChar && (i < length)) {
      randomNumber = getRandomNum();
      password = password + specialChar[randomNumber];
      i++;
    }
    if (ifNumeric && (i < length)) {
      randomNumber = getRandomNum();
      password = password + randomNumber;
      i++;
    }
    i--;
    console.log(i);
  }
  return password;
}

function getRandomNumLetters() {

  var random = Math.floor(Math.random() * 26);
  return random;
}

function getRandomNum(random) {

  var random = Math.floor(Math.random() * 10);
  return random;
}

function askPasswordLength() {

  for(i=0; i<1; i++){

    var passwordLength = prompt("How many characters in your password? (At least 8 and no more than 128) ");

    if(passwordLength === null){
      break;
    }else{
      if((passwordLength < 8) || (passwordLength > 128)){
        alert("Outside password restrictions. Please try again!");
        i--;
      } 
    }
  }
  return passwordLength;
}