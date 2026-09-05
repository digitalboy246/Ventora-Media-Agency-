/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* Close menu when clicking a link */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();


    /*
       IMPORTANT:
       Replace 2340000000000 with your real
       WhatsApp number.
    */

    const phoneNumber = "2340000000000";


    const whatsappText =
        `Hello Ventora Media Agency!%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Service: ${encodeURIComponent(service)}%0A%0A` +
        `Project Details:%0A${encodeURIComponent(message)}`;


    window.open(
        `https://wa.me/${phoneNumber}?text=${whatsappText}`,
        "_blank"
    );

    contactForm.reset();

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".service-card, .portfolio-item, .price-card, .process-grid > div, .about-image, .about-content"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ================= HEADER SCROLL ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,5,5,.92)";

    } else {

        header.style.background = "rgba(8,8,8,.72)";

    }

});
