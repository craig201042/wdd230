document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = new Date();



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
const url = "https://craig201042.github.io/wdd230/chamber/data/members.json";
async function getRandomData() {
    const response = await fetch(url);
    const data = await response.json();
    data.companies.forEach((company) => {
        if (company.membershipLevel != "Broze") {
            const adTitle = document.querySelector("#title");
            const pic = document.querySelector("#advertise");
            const image = document.createElement("img");
            image.setAttribute("src", company.imageUrl);

        }
    });
}


