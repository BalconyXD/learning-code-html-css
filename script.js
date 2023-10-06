let name = document.getElementById("name");
let saynameBtn = document.getElementById("sayName");
let changeBg = document.getElementById("changeBg"); 
let body = document.querySelector("body");
let resetBtn = document.getElementById("reset");

saynameBtn.addEventListener("click", () => {
    name.innerHTML = "Hello, Pradipat Incham";
})

changeBg.addEventListener("click", () => {
    body.style.backgroundColor = "Yellow";
})

resetBtn.addEventListener("click", () => {
    body.style.backgroundColor = "white";
})