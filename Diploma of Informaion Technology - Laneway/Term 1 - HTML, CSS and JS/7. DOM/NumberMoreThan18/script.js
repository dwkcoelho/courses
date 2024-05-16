// Interact with the DOM


//Query Selector - It will get the first element/class in the document

// Element/Tag reference
const paragraph = document.querySelector("p");

// CLass reference

// First class error
const error = document.querySelector(".error");

// Second class error
const divError = document.querySelector("div.error");

// JS path reference
const listItem2 = document.querySelector("body > ul > li:nth-child(2)");

// ID reference
const divErrorId = document.getElementById("div2");

//  More than a tag
const h1s = document.getElementsByTagName("h1");

// More than a tag per class
const test = document.getElementsByClassName("test");


// Change the tags

// Text
paragraph.innerText = "I have change this text with JS";

// Whole tag
paragraph.innerHTML = "<h2>I changed this tag for H2</h2>"


let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", function() {
    let inputBox = document.getElementById("input-box").value;
    let answer = Number(inputBox) + 18;

    result.innerText = answer;
})