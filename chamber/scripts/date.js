//Set year in footer
const year = document.querySelector("#year-text");
const date = new Date();
year.innerHTML = `&copy ${date.getFullYear()} | GAM Chamber of Commerece.`;

//Set last modification in footer
const lm = document.querySelector("#lm");
lm.textContent = `Last modification: ${document.lastModified}`;

//timestamp for the form
const timestamp = document.querySelector("#timestamp");

timestamp.setAttribute("value", `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);