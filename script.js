document.querySelector("button").addEventListener("click", () => {
    document.querySelector(".projects").scrollIntoView({
        behavior: "smooth"
    });
});
const elements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
