document.addEventListener("DOMContentLoaded", () => {

    /* SMOOTH NAVIGATION */
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });


    /* ACTIVE NAVIGATION */
    const sections = document.querySelectorAll("main section[id]");

    const updateActiveNav = () => {
        const scrollPosition = window.scrollY + 120;
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();


    /* AUTOMATIC IMAGE SLIDER */
    let currentSlide = 0;
    const totalSlides = 4;
    const sliderTrack = document.getElementById("smarthealthcare-slider");

    if (sliderTrack) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            sliderTrack.style.transform = `translateX(-${currentSlide * 25}%)`;
        }, 3000); // Change image every 3 seconds
    }

});


/* IMAGE LIGHTBOX MODAL FUNCTIONS (Global scope for inline onclick listeners) */
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imageSrc;
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}

/* DETAILS MODAL FUNCTIONS */
function openDetailsModal() {
    const modal = document.getElementById("detailsModal");
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeDetailsModal() {
    const modal = document.getElementById("detailsModal");
    if (modal) {
        modal.style.display = "none";
    }
}