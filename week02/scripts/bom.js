const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

buttonElement.addEventListener('click', () => {
    if (inputElement.value == "") {
        alert("Please enter your favorite chapter!");
    }
    else {
        const li = document.createElement("li");
        const delButton = document.createElement("button");
        li.innerHTML = inputElement.value;
        delButton.textContent = "❌";
        li.append(delButton);
        listElement.appendChild(li);
        delButton.addEventListener('click', () => {
            listElement.removeChild(li);
            inputElement.focus();
        });
        inputElement.focus();
        inputElement.value = "";
    }
});