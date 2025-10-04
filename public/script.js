
/* Menu shown when toggle btn clicked */
const icon = document.getElementById("icon");
const toggleBtn = document.getElementById("toggleBtn");
const toggleClose = document.getElementById("toggleClose");
const toggleContainer = document.getElementById("toggleContainer");

toggleBtn.addEventListener('click', () => {
    toggleContainer.classList.add("active");
});
toggleClose.addEventListener('click', () => {
    toggleContainer.classList.remove("active");
});

/* Menu hidden by nav-link when clicked */
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () => {
    toggleContainer.classList.remove("active");
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Restore theme on page load */
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        icon.src = "assets/yellow-sun.png";
        icon.classList.remove("text-2xl");
        icon.classList.add("text-3xl");
    } else {
        document.body.classList.remove("dark");
        icon.src = "assets/blue moon.png";
        icon.classList.remove("text-3xl");
        icon.classList.add("text-2xl");
    }
});

/* Toggle between light and dark */
icon.onclick = function () {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");

    icon.src = isDark ? "assets/yellow-sun.png" : "assets/blue moon.png";
    icon.classList.toggle("text-3xl", isDark);
    icon.classList.toggle("text-2xl", !isDark);

    // Save theme
    localStorage.setItem("theme", isDark ? "dark" : "light");
}


/* scroll up button show or hidden */
const scrollUp = () => {
    const scrollUp = document.querySelector('#scrollup');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);








