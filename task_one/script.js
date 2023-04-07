const one = document.querySelector(".one");
const two = document.querySelector(".two");

one.addEventListener("click", () => {
    one.classList.toggle("none");
    two.classList.toggle("none");
})
two.addEventListener("click", () => {
    one.classList.toggle("none");
    two.classList.toggle("none");
})