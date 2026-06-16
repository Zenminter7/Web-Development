const colorBox = document.getElementById("colorBox");
const colorPicker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");

const defaultColor = "lightblue";

colorPicker.addEventListener("input", function () {
    colorBox.style.backgroundColor = colorPicker.value;
});

resetBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = defaultColor;
    colorPicker.value = "#add8e6";
});