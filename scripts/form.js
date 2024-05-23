const p1 = document.querySelector("#pw");
const p2 = document.querySelector("#pwc");
const msg = document.querySelector("#message");

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