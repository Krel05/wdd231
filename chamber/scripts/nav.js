//Code hamburger button
const navButton = document.querySelector("#nav-button");
const navBar = document.querySelector("#nav-bar");

navButton.addEventListener('click', () => {
    //isOpen will notify wether class "show" exits or not with a boolean 
    const isOpen = navButton.classList.toggle("show");
    //For accsibility, we add an attribute to the button to tell the user wether the menu is open or not
    navButton.setAttribute("aria-expanded", isOpen);    
    navBar.classList.toggle("show");
});