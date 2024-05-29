const timestamp = document.querySelector("#time");
const formelement = document.querySelector("#formwork");

formelement.onload = () => {
    timestamp.innerHTML = Date.now();
};
