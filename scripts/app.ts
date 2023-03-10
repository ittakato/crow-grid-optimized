const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const mobileNav = document.querySelector('.mobile-nav');

function animateHamburger(): void {
  bar1?.classList.toggle('animateBar1');
  bar2?.classList.toggle('animateBar2');
  bar3?.classList.toggle('animateBar3');
  mobileNav?.classList.toggle('open-mobile-nav');
}

hamburger?.addEventListener('touchstart', animateHamburger);
hamburger?.addEventListener('touchend', animateHamburger);
hamburger?.addEventListener('touchcancel', animateHamburger);
hamburger?.addEventListener('click', animateHamburger);
