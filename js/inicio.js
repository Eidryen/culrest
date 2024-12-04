// Cambiar el fondo del navbar al hacer scroll
    document.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Animar los enlaces al cargar la página
    window.addEventListener("load", function () {
        const links = document.querySelectorAll(".custom-link");
        links.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add("appear");
            }, index * 150); // Animación escalonada
        });
    });

