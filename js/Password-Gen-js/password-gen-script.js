let totalChar = 10;

// slider
let lengthSlider = document.getElementById("lengthSlider");
let output = document.getElementById("lengthInt");
output.innerHTML = lengthSlider.value;

// functions
// slider function and feedback
lengthSlider.oninput = function () {
  output.innerHTML = this.value;
  totalChar = this.value;
};

function fnTypePass(arr) {
  let isValid = true;
  console.log(arr)
  for(let i of arr) {
    if( i === false) {
      console.log(i)
      isValid = false
      break
    }
  }
  console.log(isValid)
  return isValid
}

// generate string password
function fnGenerate() {
  let lowSet = "abcdefghijklmnopqrstuvwxyz";
  let upSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numberSet = "0123456789";
  let specialSet = ",./;:][}{-)(*&^%$#@!";
  let setArray = [];
  let genPassword = "";

  // checkboxes
  let useSpecial = document.getElementById("useSpecial").checked;
  let useNumber = document.getElementById("useNumb").checked;
  let useLower = document.getElementById("useLow").checked;
  let useUpper = document.getElementById("useUp").checked;

  // create array of sets
  useSpecial ? setArray.push(specialSet) : "0";
  useNumber ? setArray.push(numberSet) : "0";
  useLower ? setArray.push(lowSet) : "0";
  useUpper ? setArray.push(upSet) : "0";


  // validate selection and generate
  if (setArray.length == 0) {
    alert("Please select characters to use.");
  } else {
    // create a passing array to ensure each category was selected at least once
    let bValidPass = false;
    let bPass = [];
    for (let i = 0; i <= setArray.length-1; i++) {
      bPass.push("false");
    }

    while (bValidPass === false) {
      console.log("starting generation");
      // add characters
      for (let i = 0; i <= totalChar; i++) {
        let iTypeIndex = Math.floor(Math.random() * setArray.length);
        let iIndex = Math.floor(Math.random() * setArray[iTypeIndex].length);
        bPass[iTypeIndex] = true; // mark type as used
        genPassword += setArray[iTypeIndex][iIndex];
      }

      bValidPass = fnTypePass(bPass);
    }
  }

  document.getElementById("password").innerHTML = genPassword
  console.log(genPassword);
}

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
