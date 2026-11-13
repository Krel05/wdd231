const file = "data/members.json";

const members = document.querySelector("#members");

async function getMembersData() {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        displayMembers(data.companies);

    } catch (error) {
        console.error(error);
    }
}

const displayMembers = (companies) => {
    companies.forEach((company) => {
        const card = document.createElement("div");
        const name = document.createElement("h3");
        const img = document.createElement("img");
        const ul = document.createElement("ul");
        const address = document.createElement("li");
        const phoneNumber = document.createElement("li");
        const url = document.createElement("li");

        name.textContent = company.name;

        address.innerHTML = `<strong>Address: </strong>${company.address}`;
        phoneNumber.innerHTML = `<strong>Phone Number: </strong>${company.phoneNumber}`;
        url.innerHTML = `<strong>Web Page: </strong> <a href="${company.url}">${company.url}</a>`;

        ul.appendChild(address);
        ul.appendChild(phoneNumber);
        ul.appendChild(url);

        img.setAttribute("src", `${company.image}`);
        img.setAttribute("alt", "Company Image");
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "400");

        card.setAttribute("class", "company")

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(ul);


        members.appendChild(card);
    })
}

getMembersData();


//Code for buttons
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");

grid.addEventListener("click", () => {
    const isPressed = members.classList.add("company-grid");
    grid.setAttribute("aria-pressed", isPressed);
    const isNotPressed = members.classList.remove("company-list");
    list.setAttribute("aria-pressed", isNotPressed);
})

list.addEventListener("click", () => {
    const isPressed = members.classList.add("company-list");
    list.setAttribute("aria-pressed", isPressed);
    const isNotPressed = members.classList.remove("company-grid");
    grid.setAttribute("aria-pressed", isNotPressed);
})