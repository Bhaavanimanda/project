let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let btn4 = document.getElementById("button4");
let containerElement = document.getElementById("colorPickerContainer");
let spnElement = document.getElementById("selectedColorHexCode");

function changeTogrey() {
    containerElement.style.backgroundColor = "#e0e0e0";
    spnElement.textContent = "#e0e0e0";

}

function changeTogreen() {
    containerElement.style.backgroundColor = "#6fcf97";
    spnElement.textContent = "#6fcf97";
}

function changeToblue() {
    containerElement.style.backgroundColor = "#56ccf2";
    spnElement.textContent = "#56ccf2";
}

function changeTopink() {
    containerElement.style.backgroundColor = "#bb6bd9";
    spnElement.textContent = "#bb6bd9";
}