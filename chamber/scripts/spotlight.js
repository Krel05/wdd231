//Display members in index.html
const file = "data/members.json";
const spotlight = document.querySelector("#spotlight");

async function getSpotlightMembers() {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const data = await response.json();
            displaySpotlightMembers(data.companies);
        } else {
            throw new Error(reponse.status);
        }
    } catch (error) {
        console.error(error);
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displaySpotlightMembers(data) {
    const filterData = data.filter((company) => company.memberlevel > 1);
    for (let i = 0; i < 3; i++) {
        let random = getRandomNumber(0, (filterData.length - 1));
        const company = filterData[random];
        const card = document.createElement("div");
        const name = document.createElement("h3");
        const img = document.createElement("img");
        const ul = document.createElement("ul");
        const address = document.createElement("li");
        const phoneNumber = document.createElement("li");
        const url = document.createElement("li");
        const membershipLevel = document.createElement("li");

        name.textContent = company.name;

        address.innerHTML = `<strong>Address: </strong>${company.address}`;
        phoneNumber.innerHTML = `<strong>Phone Number: </strong>${company.phoneNumber}`;
        url.innerHTML = `<strong>Web Page: </strong> <a href="${company.url}">${company.url}</a>`;
        membershipLevel.innerHTML = `<strong>Membership Level: </strong>${company.memberlevel}`;

        ul.appendChild(address);
        ul.appendChild(phoneNumber);
        ul.appendChild(url);
        ul.appendChild(membershipLevel);

        img.setAttribute("src", `${company.image}`);
        img.setAttribute("alt", "Company Image");
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "400");

        card.setAttribute("class", "company")

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(ul);

        spotlight.appendChild(card);
        filterData.splice(random, 1);
    }
}

getSpotlightMembers();