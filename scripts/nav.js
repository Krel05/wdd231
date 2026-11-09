//Hamburger button
const navButton = document.querySelector('#nav-button');
//Code for navigation menu
const navBar = document.querySelector('#nav-bar');
//Event listener to toggle show class
navButton.addEventListener('click', () => {
    const isOpen = navButton.classList.toggle('show');
    //Next line is to tell the user that the menu is expanded or not
    navButton.setAttribute('aria-expanded', isOpen);
    //Creates or deletes the class show to when adding css we can expand or colapse the menu
    navBar.classList.toggle('show');
});
