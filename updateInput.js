document.addEventListener('DOMContentLoaded', () => {
let nameInput = document.getElementById('ccName');
let nameInputBox = document.getElementById('nameInputBox');
nameInputBox.addEventListener('input', function getText() {
    nameInput.innerText = nameInputBox.value;
    });
});