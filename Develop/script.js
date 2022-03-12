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


function generatePassword() {
    
    // This section defines arrays
    var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ":", ";", "'", '"', "<", ",", ">", ".", "?", "/", "`", "~", ""];
    var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
    var emptyArray = [];
    var password = [];
    // This while loop will determine the length of the password within the set parameters (8 to 128)
    var passwordLength = 0;
    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Enter length of password", "Between 8 and 128")
    }
    alert("You chose a length of: " + passwordLength)
    // This if/else conditional statement will determine if the user would like lower case characters or not
    var lowerCaseBoolean = false;
    if (confirm("Would you like lower case letters?")) {
        lowerCaseBoolean = true;
        password.push(lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)]);
        emptyArray = emptyArray.concat(lowerCaseArray);
        alert("Lower case has been chosen")
    }
    else {
        alert("No lower case has been chosen");
    }
    // This if/else conditional statement will determine if the user would like upper case characters or not
    var upperCaseBoolean = false;
    if (confirm("Would you like upper case letters?")) {
        upperCaseBoolean = true;
        password.push(upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)]);
        emptyArray = emptyArray.concat(upperCaseArray);
        alert("Upper case has been chosen")
    }
    else {
        alert("No upper case has been chosen")
    }
    // This if/else conditional statement will determine if the user would like special characters or not
    var specialCharBoolean = false;
    if (confirm("Would you like special characters?")) {
        specialCharBoolean = true;
        password.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
        emptyArray = emptyArray.concat(specialCharArray);
        alert("Special characters have been chosen")    
    }
    else {
        alert("No special characters have been chosen")
    }
    // This if/else conditional statement will determine if the user would like numbers or not
    var numberBoolean = false;
    if (confirm("Would you like to use numbers?")) {
        numberBoolean = true;
        password.push(numberArray[Math.floor(Math.random() * numberArray.length)]);
        emptyArray = emptyArray.concat(numberArray)
        alert("Numbers have been chosen")
    }
    else {
        alert("No numbers have been chosen")
    }
    // This for loop will confine the password to the specified length
    var passwordCount = password.length;
    for (let i=0; i<(passwordLength - passwordCount); i++)
    {
      password.push(emptyArray[Math.floor(Math.random() * emptyArray.length)]);
    }
    // This converts the array into a string that will be presented to the user as their password
    passwordString = password.join("");
    alert("Your password is: " + passwordString);

    return passwordString;
}