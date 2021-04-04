
// Setting global variables for all possible characters in password

var charSets = "qwertyuiopasdfghjklzxcvbnm";
var upperCharsets = "QWERTYUIOPASDFGHJKLZXCVBNM"
var numericSet = "1234567890";
var specCharSet = "-=[]/!@#$%^&*()_+<>";
var genPass = "";
var passArea = document.getElementById("newPassWord");

// Clear function resets values so user can generate another password
function clear (){
    passArea.innerText = "Your new secure password";
    genPass = "";
    passLengthNum = 0;
    charSets = "qwertyuiopasdfghjklzxcvbnm";
}
// Function that generates password
function passwordGen(){
    
    clear();

    var passLengthNum = parseInt(prompt("Enter your passworth length 8 minimun-128 max. (Numbers Onlys)"));
    var passwordLength = 0;

// If statements checking non acceptable inputs

    if (passLengthNum < 8 || passLengthNum > 128){
        alert("Not valid input try again");
        clear();
    }else if( !passLengthNum || passLengthNum === null){
        alert("Not valid input try again");
        clear();
    }
     else {

    passwordLength = passLengthNum;
    // Boolean variables to be added to the final generated password
    var lowerCaseCheck = confirm("Do you want to user lowercase in your password?")
    var upperCaseCheck = confirm("Do you want to use uppercase in your password?");
    var numberCheck = confirm("Do you want numbers in your password?");
    var specialCharCheck = confirm("Do you want special Characters?");
    


// These if statements checks the parameters for the generated password
    if(lowerCaseCheck){
        charSets = charSets;
    } else{
        charSets = "";
    }

    if(upperCaseCheck){
        charSets = charSets + upperCharsets;
        console.log(charSets);
    }else{
        charSets = charSets;
        console.log(charSets);
    }

    if(numberCheck){
        charSets = charSets + numericSet;
        console.log(charSets);
    }else{
        charSets = charSets;
        console.log(charSets);
    }


    if(specialCharCheck){
        charSets= charSets + specCharSet;
        console.log(charSets);
    }else{
        charSets = charSets;
    }

// for loops picks random char. in the final charset variable and adds it to a final password string
    for(var i=0; i< passwordLength; i++ ){
        genPass = genPass + charSets.charAt(Math.floor(Math.random() * charSets.length));
        passArea.innerText = genPass;
    }
}
// returns password and console logs for debugging
console.log(genPass);
console.log("This password's length is: " + genPass.length);
return
}