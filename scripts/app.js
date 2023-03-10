"use strict";
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const mobileNav = document.querySelector('.mobile-nav');
function animateHamburger() {
    bar1 === null || bar1 === void 0 ? void 0 : bar1.classList.toggle('animateBar1');
    bar2 === null || bar2 === void 0 ? void 0 : bar2.classList.toggle('animateBar2');
    bar3 === null || bar3 === void 0 ? void 0 : bar3.classList.toggle('animateBar3');
    mobileNav === null || mobileNav === void 0 ? void 0 : mobileNav.classList.toggle('open-mobile-nav');
}
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('touchstart', animateHamburger);
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('touchend', animateHamburger);
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('touchcancel', animateHamburger);
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', animateHamburger);
