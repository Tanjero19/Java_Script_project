const mobileButton = document.querySelector('.nav_button');
const mobileNav = document.querySelector('.mobile_nav');


    mobileButton.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile_nav_active');
})

function toggleClass(elementId, className) {
    const element = document.getElementById(elementId);
    element.classList.toggle(className);
}

