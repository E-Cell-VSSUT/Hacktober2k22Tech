const form = document.querySelector(".form");
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const input1 = document.querySelector(".insert1");
const input2 = document.querySelector(".insert2");
const input3 = document.querySelector(".insert3");
const input4 = document.querySelector(".insert4");
const input5 = document.querySelector(".insert5");



toggle.addEventListener("click", () => {
  form.classList.toggle("light")
    ? (toggle.firstElementChild.className = "far fa-moon")
    : (toggle.firstElementChild.className = "far fa-sun");
  body.classList.toggle("light");
  input1.classList.toggle("light");
  input2.classList.toggle("light");
  input3.classList.toggle("light");
  input4.classList.toggle("light");
  input5.classList.toggle("light");
  
});