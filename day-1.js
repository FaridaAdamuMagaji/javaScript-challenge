/*console.log("Hello, World!");

let greeting = "Hello, World!";
console.log(greeting);

alert("Hello, Farida you are doing great! keep it up");

// document.body.innerHTML = "Hello, World!";

let name = "Farida";
console.log("Hello, " + name + "!");

function greet () {
    console.log("Hello, World!");
}
greet();

let greets = function () {
    console.log("Hi, dear!");
}
greets();

function add (a,b) {
    return a + b;
}
let result = add(3, 5);
console.log(result);

let results = add(4, 10);
console.log(results);


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const price = [50, 60, 70, 80, 90];
const total = price.map(num => num * 2);
const even = price.filter(num => num > 60);
console.log(total);
console.log(even);*/


// website

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const navMenu = document.getElementById("navMenu");
    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener(click, () => {
            navMenu.classList.toggle("active");
        });
        closeMenu.addEventListener(click, () => {
            navMenu.classList.remove("active");
        });
    }
});