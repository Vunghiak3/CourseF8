var elementBox = document.querySelector(".box");
console.log("🚀 ~ file: js.js:2 ~ elementBox", [elementBox]);

elementBox.innerHTML = '<h1 title="Heading">Heading</h1>';

console.log("when use `innerHTML`:\n " + elementBox.innerHTML);
console.log("when use `outerHTML`:\n" + elementBox.outerHTML);

// elementBox.outerHTML = '<span>outer</span>'

console.log(document.querySelector("h1").innerText);
