document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = new Date();
const msToDays = 84600000;
const betweenelement = document.querySelector("#timebetween")


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const today = Date.now();
const lastVisitDay = Number(localStorage.getItem("visitTime-ls")) || 0;
let daysBetween = (today - lastVisitDay) / msToDays;
if (lastVisitDay != 0) {
    if (daysBetween < 1) {
        betweenelement.textContent = "Back so soon! Awesome!";
    }
    else {
        betweenelement.innerHTML = `You last visited ${daysBetween.toFixed(0)} days ago`;
    };
}
else {
    betweenelement.textContent = "Welcome! Let us know if you have any questions.";
};

localStorage.setItem("visitTime-ls", today);

const timestamp = document.querySelector("#time");
const formelement = document.querySelector("#formwork");

formelement.onload = () => {
    timestamp.innerHTML = Date.now();
};