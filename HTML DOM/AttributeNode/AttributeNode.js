var headingElement = document.querySelector('h2')
console.log("🚀 ~ file: A&T.js:2 ~ headingElement", headingElement)

headingElement.title = 'Heading'
headingElement.id = 'IDheading'
headingElement.className = 'heading'
headingElement.setAttribute('href', '#')

var getAttributeOfElement = headingElement.getAttribute('class')
console.log("🚀 ~ file: AAndT.js:9 ~ getAttributeOfElement", getAttributeOfElement)



var elementa = document.querySelector('a')
console.log("🚀 ~ file: AAndT.js:11 ~ elementa", elementa)

elementa.href = '#'
