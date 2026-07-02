/* =========================================
   TechNova JavaScript
========================================= */

// Navbar Scroll Effect
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.padding = "12px 0";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";

    }

    else {

        navbar.style.background = "rgba(15,23,42,.75)";
        navbar.style.padding = "18px 0";
        navbar.style.boxShadow = "none";

    }

});



/* =========================================
   Active Navigation Link
========================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});



/* =========================================
   Hero Button Animation
========================================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});



/* =========================================
   Hero Image Rotation
========================================= */

const heroImage = document.querySelector(".hero-image");

if(heroImage){

heroImage.addEventListener("mouseenter", () => {

    heroImage.style.transform = "scale(1.05) rotate(2deg)";
    heroImage.style.transition = ".4s";

});

heroImage.addEventListener("mouseleave", () => {

    heroImage.style.transform = "scale(1) rotate(0deg)";

});

}



/* =========================================
   Scroll Reveal Animation
========================================= */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

const revealElements=document.querySelectorAll("section");

revealElements.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(80px)";
section.style.transition="all 1s ease";

observer.observe(section);

});



/* =========================================
   Console Message
========================================= */

console.log("🚀 TechNova Website Loaded Successfully");