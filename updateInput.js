document.addEventListener('DOMContentLoaded', () => {
let nameInput;
let nameInputBox = document.getElementById('nameInputBox');
nameInputBox.addEventListener('input', function getText() {
    nameInput = nameInputBox.value;
    });
});