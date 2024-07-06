//const { links } = require("express/lib/response");

const typed = new Typed('.text', {
    strings: ["Software Developer", "Frontend Developer","Web Developer", "MERN stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// const links = document.querySelectorAll("header");

// for(const link of links) {
//     link.addEventListener("click",  smoothScroll);
// }

// function smoothScroll(e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");

//     document.querySelector(href).scrollIntoView({
//         behavior: "smooth"
//     });
// }

let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};