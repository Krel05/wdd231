const membershipLevel = document.querySelector("#membership")

const data = "data/membership.json";

async function getMembershipData(file) {
    try {
        const response = await fetch(file);

        if (response.ok) {

            const data = await response.json();
            displayMembers(data.levels);
        } else {
            throw new Error(`Request failed with status: ${response.status}`);
        }

    } catch (error) {
        console.error(error);
    }
}

const displayMembers = (data) => {
    data.forEach((level) => {
        const card = document.createElement("div");
        const title = document.createElement("h2");
        const link = document.createElement("a");

        card.setAttribute("class", "level")

        title.textContent = level.level;
        link.textContent = "More info";
        link.addEventListener("click", () => {
            displayModal(level);
        })

        card.appendChild(title);
        card.appendChild(link);

        membership.appendChild(card);
    })
}

function displayModal(info) {

    const modal = document.querySelector("#moreInfo");
    modal.innerHTML = "";

    const title = document.createElement("h3");
    const description = document.createElement("p");
    const benefits = document.createElement("ul");
    const price = document.createElement("p");
    const close = document.createElement("button");

    title.textContent = info.level;
    description.innerHTML = `<span>Description:</span> ${info.description}`;

    benefits.innerHTML = "<span>Benefits:</span> "

    info.benefits.forEach((benefit) => {
        const b = document.createElement("li");
        b.textContent = benefit;
        benefits.appendChild(b);
    })

    price.innerHTML = `<span>Price:</span> ${info.price}`;

    close.textContent = "Close";

    modal.appendChild(title);
    modal.appendChild(description);
    modal.appendChild(benefits);
    modal.appendChild(price);
    modal.appendChild(close);

    modal.showModal();
    close.addEventListener("click", () => {
        modal.close();
    })
}

getMembershipData(data);