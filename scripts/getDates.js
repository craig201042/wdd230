document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = new Date();
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const visitsDisplay = document.querySelector(".visits");
const p1 = document.querySelector("#pw");
const p2 = document.querySelector("#pwc");
const msg = document.querySelector("#message");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});

let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

p2.addEventListener("focusout", control);

function control() {
    if (p1.value != p2.value) {
        msg.textContent = "❗Password do not match!";
        p2.value = "";
        p2.focus();
    } else {
        msg.textContent = "Password match!🥳";
    }
}

const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#pr");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}