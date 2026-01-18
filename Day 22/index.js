// // DOM = DOCUMENT OBJECT MODEL
// // Object{} that represents the page you see in the web browser
// // and provides you with an API to interact with it.
// // Web browser constructs the DOM when it loads an HTML document,
// // and structures all the elements in a tree-like representation.
// // JavaScript can access the DOM to dynamically
// // change the content, structure, and style of a web page.

// // element selectors = Methods used to target and manipulate HTML elements
// // They allow you to select one or multiple HTML elements
// // from the DOM (Document Object Model)

// // 1. document.getElementById()// ELEMENT OR NULL
// // 2. document.getElementsClassName() // HTML COLLECTION
// // 3. document.getElementsByTagName() // HTML COLLECTION
// // 4. document.querySelector()// ELEMENT OR NULL
// // 5. document.querySelectorA11()// NODELIST

// // DOM Navigation = The process of navigating through the structure
// // of an HTML document using JavaScript.

// // .firstElementChild
// const element=document.getElementById("fruits");
// const firstChild=element.firstElementChild;
// firstChild.style.backgroundColor="yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements. forEach(ulElement => {
// const firstChild = ulElement.firstElementChild;
// firstChild.style.backgroundColor = "yellow";
// });
// // .lastElementChild
// const element=document.getElementById("fruits");
// const lastChild=element.lastElementChild;
// lastChild.style.backgroundColor="red";
// const ulElements = document.querySelectorAll("ul");

// ulElements. forEach(ulElement => {
// const lastChild = ulElement.lastElementChild;
// lastChild.style.backgroundColor = "red";
// });
// // .nextElementSibling
// const element=document.getElementById("fruits");
// const nextSibling=element.nextElementSibling
// nextSibling.style.backgroundColor="blue";
// const ulElements = document.querySelectorAll("ul");

// ulElements. forEach(ulElement => {
// const nextSibling = ulElement.nextElementSibling;
// nextSibling.style.backgroundColor = "blue";
// });
// // .previousElementSibling
// const element=document.getElementById("fruits");
// const previousSibling=element.previousElementSibling
// previousSibling.style.backgroundColor="green";
// const ulElements = document.querySelectorAll("ul");

// ulElements. forEach(ulElement => {
// const previousSibling = ulElement.previousElementSibling;
// previousSibling.style.backgroundColor = "green";
// });
// // .parentElement
// const element=document.getElementById("fruits");
// const parent=element.parentElement
// parent.style.backgroundColor="pink";
// const ulElements = document.querySelectorAll("ul");

// ulElements. forEach(ulElement => {
// const parent = ulElement.parentElement;
// parent.style.backgroundColor = "pink";
// });
// // .children
// const element=document.getElementById("fruits");
// const children=element.children
// children.style.backgroundColor="grey";
// const ulElements = document.querySelectorAll("ul");

// ulElements. forEach(ulElement => {
// const children = ulElement.children;
// children.style.backgroundColor = "grey";
// });