gsap.to(".header", {
    scrollTrigger: {
        trigger: ".section-tariffs .text",
        toggleActions: "play restart none reverse",
        start: 'bottom bottom',
    },
    backgroundColor: "white",
    duration: 0.001
});

gsap.from(".navigation-toggle", {
    scrollTrigger: {
        trigger: ".section-clients",
        toggleActions: "play restart none reverse",
        start: 'bottom bottom',
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
const scroll = document.querySelectorAll('#show-up-image')

scroll.forEach((el) => {

    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
        },
        y: 100,
        opacity: 0,
        duration: 1
    })
})

const animationT = (function () {
    if (window.innerWidth > 935) {
        gsap.to('.animatedT', {
            scrollTrigger: {
                trigger: '#all-works-btn',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            },
            x: 0
        })
    }
})();


const accordionBtn = document.querySelectorAll('.accordion-button');

accordionBtn.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('accordion-active');
        const panel = el.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

const menuToggle = document.querySelector('.navigation-toggle');
const closeBtn = document.querySelector('.close-btn');
const links = document.querySelectorAll('.nav-link');
const navWrapper = document.querySelector('.navigation-wrapper');
const popupButtons = document.querySelectorAll('#popup-btn');
const popupWrapper = document.querySelector('.popup-wrapper');

popupButtons.forEach(button => {
    button.addEventListener('click', () => {
        closePopup()
    })
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
        closeNav()
    })
});

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    closeNav()
});

closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeNav()
});

window.addEventListener('click', (e) => {
    const navWrapper = document.querySelector('.navigation-wrapper');
    if (e.target == navWrapper) {
        closeNav();
    }
    if (e.target == popupWrapper) {
        closePopup()
    }
});

const closeNav = (e) => {
    const nav = document.querySelector('.navigation');
    if (navWrapper.classList.contains('menu-open')) {
        navWrapper.classList.remove('menu-open');
        nav.style.transform = 'translateX(100%)';
    } else {
        navWrapper.classList.add('menu-open');
        nav.style.transform = 'translateX(0)';
    }
};

const closePopup = () => {
    const popup = document.querySelector('.popup');
    if (popupWrapper.classList.contains('popup-open')) {
        popupWrapper.classList.remove('popup-open');
        popup.style.transform = 'translateY(300px) scale(.6)';
    } else {
        popupWrapper.classList.add('popup-open');
        popup.style.transform = 'translateY(0px) scale(1)';
    }
};