document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = new Date();
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
const url = "https://craig201042.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector(".cards");
const display = document.querySelector("article");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.companies);
}
const displayMembers = (companies) => {
    companies.forEach((company) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const companyLogo = document.createElement("img");
        const address = document.createElement("div");
        const phoneNumber = document.createElement("div");
        const webPage = document.createElement("div");
        const website = document.createElement("a");
        const memberShip = document.createElement("div");
        fullName.textContent = company.name;
        address.textContent = company.address;
        phoneNumber.textContent = company.phoneNumbers;
        website.setAttribute = ("href", company.website);
        website.innerText = "Company WebPage";
        memberShip.textContent = company.membershipLevel;
        companyLogo.setAttribute("src", company.website);
        companyLogo.setAttribute("alt", company.name);
        companyLogo.setAttribute("loading", "lazy");
        companyLogo.setAttribute("width", "340");
        companyLogo.setAttribute("height", "440");
        webPage.appendChild(website);
        card.appendChild(fullName);
        card.appendChild(webPage);
        card.appendChild(address);
        card.appendChild(companyLogo);
        card.appendChild(phoneNumber);
        card.appendChild(memberShip);
        cards.appendChild(card);
    });
}
getMembersData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    display.classList.add("cards");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("cards");
});
