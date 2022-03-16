let nameInput = document.getElementById('ccName');
let nameInputBox = document.getElementById('nameInputBox');
document.addEventListener('DOMContentLoaded', () => {
nameInputBox.addEventListener('input', function getText() {
    nameInput.innerText = nameInputBox.value;
    });
});