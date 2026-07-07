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
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(5);



// Animation loop
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    cube.rotation.x = y * 0.005;
    cube.rotation.y = x * 0.005;
});
gsap.from(".hero h1", {
    y: -50,
    opacity: 0,
    duration: 1
});

gsap.from(".hero p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3
});

gsap.from("button", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    delay: 0.6
});
const skillsTitle = document.getElementById("skills-title");
const skills = document.querySelectorAll(".skill");

skillsTitle.addEventListener("click", () => {
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.classList.toggle("active");
        }, index * 200); // delay for stagger effect
    });
});
