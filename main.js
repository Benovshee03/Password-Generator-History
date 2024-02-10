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
const copyButton = document.querySelector(".take");
const passwordInput = document.querySelector(".textInput");
const tbody = document.querySelector(".tbody");
var newRan = "";
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
  newRan = "";
  for (let i = 0; i < size.textContent; i++) {
    newRan += passwordAllCharacters.charAt(
      Math.floor(Math.random() * passwordAllCharacters.length)
    );
  }
  passwordInput.value = newRan;
}
generateButton.addEventListener("click", () => {
  getRandomPassword();
});
copyButton.addEventListener("click", () => {
  if (newRan) {
    navigator.clipboard
      .writeText(newRan)
      .then(() => {
        alert("Password copied to clipboard: " + newRan);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
// document.addEventListener("DOMContentLoaded", function() {
document.querySelector(".svg_gr").addEventListener("click", () => {
  if (newRan) {
    tbody.innerHTML += `
      <div>
          <tr class="copy1">
              <td class="copy_pssw">${newRan}</td>
              <td><img src="./Icon.svg" alt="CopyButton" class="copyFromList" /></td>
          </tr>    
      </div>`;
    const copyLast = document.querySelector(".copyFromList");
    console.log(copyLast);
    if (copyLast) {
      copyLast.addEventListener("click", () => {
        if (newRan && tbody) {
          navigator.clipboard
            .writeText(newRan)
            .then(() => {
              alert("Password copied to clipboard: " + newRan);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      });
    }
  }
});
// });
