// Document object
console.log(document);
document.write('hello guy')

//Get element methods
// ID, Class, tag, css selector, html collection
var getID = document.getElementById('name')
console.log("🚀 ~ file: documentObject.js:8 ~ getID", {getID})

var getClass = document.getElementsByClassName('name')
console.log("🚀 ~ file: documentObject.js:11 ~ getClass", getClass)

var getTagName = document.getElementsByTagName('p')
console.log("🚀 ~ file: documentObject.js:14 ~ getTagName", getTagName)

var getCssSelector = document.querySelectorAll('.heading-2')
// var getCssSelector = document.querySelector('.heading-2')
// var getCssSelector = document.querySelector('.box .heading-2')
// var getCssSelector = document.querySelector('html .box .heading-2')
// var getCssSelector = document.querySelector('.box .heading-2:first-child')
// var getCssSelector = document.querySelector('.box .heading-2:nth-child(2)')
console.log("🚀 ~ file: documentObject.js:17 ~ getCssSelector", getCssSelector)

//Get Form
var getForm = document.forms
// var getForm = document.forms['form-1']
// var getForm = document.forms.testform
console.log("🚀 ~ file: documentObject.js:26 ~ getForm", getForm)
