const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");
const copyMessage = document.getElementById("copy-message");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};
const generatePassword = () => {
    let password = "";
    const possibleChars = [];

  
    if (upperInput.checked) possibleChars.push(...upperSet);
    if (lowerInput.checked) possibleChars.push(...lowerSet);
    if (numberInput.checked) possibleChars.push(...numberSet);
    if (symbolInput.checked) possibleChars.push(...symbolSet);

    if (possibleChars.length === 0) {
        passBox.innerText = "Select at least one option!";
        return;
    }

    for (let i = 0; i < totalChar.value; i++) {
        password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }

    passBox.innerText = password;
};


const copyPassword = () => {
    navigator.clipboard.writeText(passBox.innerText)
        .then(() => {
            copyMessage.classList.add("show");
            setTimeout(() => copyMessage.classList.remove("show"), 2000);
        })
        .catch(() => alert("Failed to copy the password!"));
};

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
