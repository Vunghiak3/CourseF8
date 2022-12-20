var elementH1 = document.querySelector("h1");
var valueH1 = elementH1.textContent;
console.log("🚀 ~ file: Text.js:2 ~ elementH1", elementH1);

var innerTextH1 = elementH1.innerText;
var textContentH1 = elementH1.textContent; //geter
console.log("There are two ways to get the value of element h1");
console.log("🚀 ~ file: Text.js:6 ~ textContentH1", textContentH1);
console.log("🚀 ~ file: Text.js:5 ~ innerTextH1", innerTextH1);

console.log("Command edit content in h1 element");

const btnInnerText = document.querySelector(".box button:first-child");
const btnTextContet = document.querySelector(".box button:nth-child(2)");
const btnReset = document.querySelector(".box button:last-child");

// 🚀 ~ innerText
btnInnerText.addEventListener("click", function () {
  var innerTextH1 = (elementH1.innerText =
    "Edited content in the h1 element after using command `innerText`");
});

// 🚀 ~ textContent
btnTextContet.addEventListener("click", function () {
  var textContentH1 = (elementH1.textContent =
    "Edited content in the h1 element after using command `textContent`");
});

btnReset.addEventListener("click", () => {
  elementH1.innerText = valueH1;
});

// 🚀 ~ Difference between `textContent` and `innerText`
console.log('Difference between `textContent` and `innerText`');

var elementSpan = document.querySelector('.difference')
var innerTextSpan = elementSpan.innerText
console.log("🚀 ~ file: Text.js:36 ~ innerTextSpan", innerTextSpan)
var textContentSpan = elementSpan.textContent
console.log("🚀 ~ file: Text.js:38 ~ textContentSpan", textContentSpan)

// The difference between `innerText` and `textContent` is 
// `innerText` shows the status of the value in the html tag that appears on the display web page
// `textContent` shows the status of the value in the html tag appears on the command line in the html
console.log('The difference between `innerText` and `textContent` is ');
console.log('`innerText` shows the status of the value in the html tag that appears on the web page');
console.log('`textContent` shows the status of the value in the html tag appears on the command line in the html');

