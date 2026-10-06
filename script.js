// MOBILE MENU
console.log("SCRIPT JS LOADED");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// Close menu after clicking a link

navLinks.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});