//Add year to the footer in idex.html
const year = document.querySelector("#currentYear");

const y = new Date();

year.innerHTML = `&copy; ${y.getFullYear()}`;

//Add last modification to the footer in index.html

document.getElementById("lm").innerHTML = `${document.lastModified}`;