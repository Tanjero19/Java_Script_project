const mobileButton = document.querySelector('.nav_button');
const mobileNav = document.querySelector('.mobile_nav');

mobileButton.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile_nav_active');
})

    function toggleClass(ementId, className) {
        const element = document.getElementById(ementId);
        element.classList.toggle(className);
    }
