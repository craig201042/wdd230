document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = new Date();




const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
const membersUrl = "https://craig201042.github.io/wdd230/chamber/data/members.json";
const heroImg = document.querySelector(".hero");
const pic = document.querySelector("#advertise");
const adtitle = document.querySelector("#title");
let i = 0;
const imageURLs = [
    "https://craig201042.github.io/wdd230/chamber/images/everlight.png",
    "https://craig201042.github.io/wdd230/chamber/images/everlight01.png",
    "https://craig201042.github.io/wdd230/chamber/images/sinbon.jpg",
    "https://craig201042.github.io/wdd230/chamber/images/sinbon2.webp"
];
async function getRandomData() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    let randomIndex = Math.floor(Math.random() * data.companies.length)
    if (data.companies[randomIndex].membershipLevel != "Broze") {
        adtitle.textContent = "Spotlight Today";
        const image = document.querySelector("#adimage");
        image.setAttribute("src", imageURLs[randomIndex]);
        image.setAttribute("alt", "advertise");
        image.setAttribute("width", "1204");
        image.setAttribute("height", "800");
        //pic.appendChild(image);
    }
    else {
        adtitle.textContent = "Miaoli city Chamber Of Commerce";
        const image = document.querySelector("#adimage");
        image.setAttribute("src", "https://craig201042.github.io/wdd230/chamber/images/hero-medium.webp");
        image.setAttribute("alt", "landscape");
        image.setAttribute("width", "1204");
        image.setAttribute("height", "800");
        //pic.appendChild(image);
    }
}

getRandomData();

const weekDay = new Date().getDay();
const banner = document.querySelector(".banner");

if (weekDay == 1 || weekDay == 2 || weekDay == 3) {
    const content = document.createElement("div");
    const text = document.createElement("p");
    const button = document.createElement("button");
    button.setAttribute("id", "bannerClose");
    const icon = document.createElement("span");
    text.innerHTML = `<strong>Reminder:</strong> Welcome to attend the chamber of commerce meet and greet on Wednesday at 7:00
    p.m.!`
    icon.textContent = "❌";
    button.appendChild(icon);
    content.appendChild(text);
    content.appendChild(button);
    banner.appendChild(content);
    document.querySelector("#bannerClose").addEventListener("click", function () {
        document.querySelector(".banner").style.display = "none";
    });

}

