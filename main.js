let characters = {
  uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
  lowercase: "qwertyuiopasdfghjklzxcvbnm",
  numbers: "1234567890",
  symbols: "!@#$%^&*()_+-=?><~{}[]|",
};
const range = document.querySelector(".range");
const size = document.querySelector("#size");
const checkInputs = document.querySelector(".check_item");
const upperCheck = document.querySelector("#upper");
const lowerCheck = document.querySelector("#lower");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const generateButton = document.querySelector(".generate");
const passwordInput = document.querySelector(".textInput");
var randomPassword = "";
var str = "QWERTYUIOPASDFGHJKLZXCVBNM";
var newRan='';
range.value = 0;
range.addEventListener("change", (e) => {
  size.innerHTML = e.target.value;
});

function getRandomPassword() {
  let passwordAllCharacters = "";

  if (upperCheck.checked) {
    passwordAllCharacters += characters.uppercase;
  }
  if (lowerCheck.checked) {
    passwordAllCharacters += characters.lowercase;
  }
  if (numberCheck.checked) {
    passwordAllCharacters += characters.numbers;
  }
  if (symbolCheck.checked) {
    passwordAllCharacters += characters.symbols;
  }
  if (!passwordAllCharacters) {
    alert("Please select at least one character type");
    return; 
  }
  console.log(`${typeof passwordAllCharacters} `-`${passwordAllCharacters}`);
  console.log(passwordAllCharacters);
  console.log(typeof passwordAllCharacters);
  newRan = ''
  for (let i = 0; i < size.textContent; i++) {
    newRan += passwordAllCharacters.charAt(
      Math.floor(Math.random() * passwordAllCharacters.length)
    );
  }
  passwordInput.value=newRan ;
  console.log(newRan);
}


generateButton.addEventListener("click", () => {
  getRandomPassword();
});
console.log(newRan);