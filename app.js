const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

window.addEventListener("load", function() {
    // Hide the preloader
    document.getElementById("preloader").style.display = "none";
    // Show the website content
    document.getElementById("content").style.display = "block";
});

