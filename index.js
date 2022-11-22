let passwordField = document.getElementById('password').readOnly = true;

const passwordPath = document.getElementById("password"); //поле для пароля

const popup = document.querySelector('.popup');

let copy = document.querySelector('.copyButton');
copy.addEventListener('click', copyPassword);

let inputPasswordLength = document.querySelector('.custom-password-input'); //введённая пользователем длина пароля
let numberCheck = document.querySelector('.setting-numbers');
let upperCaseCheck = document.querySelector('.setting-uppercase');
let cyrillicCheck = document.querySelector('.setting-cyrillic');
let specSymbolCheck = document.querySelector('.setting-spec-symbols');

const englishChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const cyrillic = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const specSymbolsChars = "!@#$%^&*()";

let password = "";
let isNeedUppercase = false;
let passwordLength = 10;
let chars = englishChars;


function checkSettings(e) {
    e.preventDefault();
    chars = englishChars;

    passwordLength= inputPasswordLength.value;
    isNeedUppercase = upperCaseCheck.checked;

    if (numberCheck.checked){
        chars += numberChars;
    }
    if (cyrillicCheck.checked){
        chars += cyrillic;
    }
    if (specSymbolCheck.checked){
        chars += specSymbolsChars;
    }
    if (isNeedUppercase){
        chars += chars.toUpperCase();
    }

    console.log(chars);
    popup.classList.remove('popup_open');
}
let form = document.querySelector('.settings-form');

let saveForm = document.querySelector('.btn-success');
//console.log(saveForm);
form.addEventListener('submit', checkSettings);


/*inputPasswordLength .addEventListener('input', () => {
    console.log(inputPasswordLength.value)
})*/

//функция генерации пароля
function generatePassword(){
    let password = "";
    for (let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }

    passwordPath.value = password;
}
let generate = document.querySelector('.generateButton');
generate.addEventListener('click', generatePassword);


const copied = document.querySelector('.copied');
function copyPassword(){
        window.navigator.clipboard.writeText(passwordPath.value);
        showMessage();
}

const showMessage = () => {
    copied.classList.add('copied-show')
    setTimeout(() =>
        copied.classList.remove('copied-show'), 1000);
}

//открытие параметров
const settingsButton = document.querySelector('.settings-button');

settingsButton.addEventListener('click', () => {
    popup.classList.add('popup_open');
});