document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
            });
        });
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top =
            sec.getBoundingClientRect(). top;
        if (top < window.innerHeight - 100){
            sec.style.opacity = 1;
            sec.style.trasform = "translateY(0)";
        }

    })
})
