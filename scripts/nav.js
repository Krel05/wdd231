//Hamburger button
const navButton = document.querySelector('#nav-button');
//Code for navigation menu
const navBar = document.querySelector('#nav-bar');
//Event listener to toggle show class
navButton.addEventListener('click', () => {
    const isOpen = navButton.classList.toggle('show');
    navButton.setAttribute('aria-expanded', isOpen);
    navBar.classList.toggle('show');
});
