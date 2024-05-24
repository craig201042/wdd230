const baseURL = "https://craig201042.github.io/wdd230/";
const linksURL = "https://craig201042.github.io/wdd230/data/link.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displaylinks(data.weeks);
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

const displaylinks = (weeks) => {
    weeks.forEach((week) => {
        const ulist = document.createElement("ul");
        const list1 = document.createElement("li");
        const list2 = document.createElement("li");
        const list3 = document.createElement("li");
        const a1 = document.createElement("a");
        const a2 = document.createElement("a");
        list1.textContent = week.week;
        list2.textContent = week.links[0].title;
        a1.href = `${baseURL}${week.links[0].url}`;
        list3.textContent = week.links[1].title;
        a2.href = `${baseURL}${week.links[1].url}`;
        list2.appendChild(a1);
        list3.appendChild(a2);
        ulist.appendChild(list1);
        ulist.appendChild(list2);
        ulist.appendChild(list3);
    });
}
getLinks();