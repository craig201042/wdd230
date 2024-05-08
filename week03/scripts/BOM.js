const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

buttonElement.addEventListener('click', () => {
    if (inputElement.value != "") {
        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);
        setChapterList();
        inputElement.value = "";
        inputElement.focus();
    }
});

function displayList(item) {
    if (item == "") {
        alert("Please enter your favorite chapter!");
    }
    else {
        const li = document.createElement("li");
        const delButton = document.createElement("button");
        li.textContent = item;
        delButton.textContent = "❌";
        li.append(delButton);
        listElement.appendChild(li);
        delButton.addEventListener('click', () => {
            listElement.removeChild(li);
            deleteChapter(li.textContent);
            inputElement.focus();
        });
    }
};

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item != chapter);
    setChapterList();
}