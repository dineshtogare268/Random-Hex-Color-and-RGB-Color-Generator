const hexBtn = document.querySelector(".hex-btn");
const hexCopyBtn = document.querySelector(".hex-copy-color");

const randomColorGenerator = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

hexBtn.addEventListener("click", () => {
  document.querySelector(".hex-color-container").style.backgroundColor =
    randomColorGenerator();
  hexColorValue = document.querySelector(
    ".hex-color-value"
  ).innerHTML = `${randomColorGenerator()}`;
});

// RGB Color Generator

const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyBtn = document.querySelector(".rgb-copy-color");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;

  const rgbColor =
    (rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`);

  rgbColorValue = document.querySelector(
    ".rgb-color-value"
  ).innerHTML = `${rgbColor}`;
});

function copyHexColorToClipBoard() {
  navigator.clipboard.writeText(hexColorValue);
  alert("Hex Color is copied to clipboard");
}
hexCopyBtn.addEventListener("click", copyHexColorToClipBoard);

function copyRgbColorToClipBoard() {
  navigator.clipboard.writeText(rgbColorValue);
  alert("RGB Color is copied to clipboard");
}

rgbCopyBtn.addEventListener("click", copyRgbColorToClipBoard);
