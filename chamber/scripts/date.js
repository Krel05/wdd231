//Set year in footer
const year = document.querySelector("#year-text");
const date = new Date();
year.innerHTML = `&copy ${date.getFullYear()} | GAM Chamber of Commerece.`;

//Set last modification in footer
const lm = document.querySelector("#lm");
lm.textContent = `Last modification: ${document.lastModified}`;