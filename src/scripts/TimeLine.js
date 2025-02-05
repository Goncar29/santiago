export function initTimeline() {
    document.addEventListener("DOMContentLoaded", () => {
        const items = document.querySelectorAll(".timeline-item");

        function checkScroll() {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY || window.pageYOffset;

            items.forEach((item) => {
                const itemTop = item.getBoundingClientRect().top + scrollY;
                const triggerPoint = windowHeight * 0.85; // Ajusta este valor si es necesario

                if (scrollY + triggerPoint > itemTop) {
                    item.classList.add("_show");
                    item.classList.remove("_hide");
                } else {
                    item.classList.remove("_show");
                    item.classList.add("_hide");
                }
            });
        }

        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Ejecutar al cargar para elementos ya visibles
    });
}
