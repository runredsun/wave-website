"use strict";

gsap.to(".header", {
  scrollTrigger: {
    trigger: ".section-tariffs .text",
    toggleActions: "play restart none reverse",
    start: 'bottom bottom'
  },
  backgroundColor: "white",
  duration: 0.001
});
gsap.from(".navigation-toggle", {
  scrollTrigger: {
    trigger: ".section-clients",
    toggleActions: "play restart none reverse",
    start: 'bottom bottom'
  },
  opacity: 0,
  duration: .2
});
gsap.to('.progress-bar', {
  width: "100%",
  scrollTrigger: {
    trigger: "main",
    scrub: true,
    start: "top top",
    end: "bottom bottom"
  }
});
var scroll = document.querySelectorAll('#show-up-image');
scroll.forEach(function (el) {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el
    },
    y: 100,
    opacity: 0,
    duration: 1
  });
});

var animationT = function () {
  if (window.innerWidth > 935) {
    gsap.to('.animatedT', {
      scrollTrigger: {
        trigger: '#all-works-btn',
        start: 'center center',
        end: 'bottom center',
        scrub: true
      },
      x: 0
    });
  }
}();

var accordionBtn = document.querySelectorAll('.accordion-button');
accordionBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    el.classList.toggle('accordion-active');
    var panel = el.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
var menuToggle = document.querySelector('.navigation-toggle');
var closeBtn = document.querySelector('.close-btn');
var links = document.querySelectorAll('.nav-link');
var navWrapper = document.querySelector('.navigation-wrapper');
var popupButtons = document.querySelectorAll('#popup-btn');
var popupWrapper = document.querySelector('.popup-wrapper');
popupButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    closePopup();
  });
});
links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.stopPropagation();
    closeNav();
  });
});
menuToggle.addEventListener('click', function (e) {
  e.stopPropagation();
  closeNav();
});
closeBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  closeNav();
});
window.addEventListener('click', function (e) {
  var navWrapper = document.querySelector('.navigation-wrapper');

  if (e.target == navWrapper) {
    closeNav();
  }

  if (e.target == popupWrapper) {
    closePopup();
  }
});

var closeNav = function closeNav(e) {
  var nav = document.querySelector('.navigation');

  if (navWrapper.classList.contains('menu-open')) {
    navWrapper.classList.remove('menu-open');
    nav.style.transform = 'translateX(100%)';
  } else {
    navWrapper.classList.add('menu-open');
    nav.style.transform = 'translateX(0)';
  }
};

var closePopup = function closePopup() {
  var popup = document.querySelector('.popup');

  if (popupWrapper.classList.contains('popup-open')) {
    popupWrapper.classList.remove('popup-open');
    popup.style.transform = 'translateY(300px) scale(.6)';
  } else {
    popupWrapper.classList.add('popup-open');
    popup.style.transform = 'translateY(0px) scale(1)';
  }
};