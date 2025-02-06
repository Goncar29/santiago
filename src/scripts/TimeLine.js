export function initTimeline() {
    function checkScroll() {
        const items = document.querySelectorAll(".timeline-item"); // 🔹 1. Selecciona todos los elementos del timeline
        const windowHeight = window.innerHeight; // 🔹 2. Obtiene la altura de la ventana
        const scrollY = window.scrollY; // 🔹 3. Obtiene la posición actual del scroll

        items.forEach((item) => { // 🔹 4. Recorre cada elemento del timeline
            const itemTop = item.getBoundingClientRect().top + scrollY; // 🔹 5. Calcula la posición real del elemento
            const triggerPoint = windowHeight * 0.85; // 🔹 6. Define el punto de activación de la animación

            if (scrollY + triggerPoint > itemTop) { // 🔹 7. Si el elemento entra en el área visible
                item.classList.add("_show"); // 🔹 8. Se le añade la clase para mostrarlo
                item.classList.remove("_hide");
            } else { // 🔹 9. Si no ha llegado al área visible, se oculta
                item.classList.remove("_show");
                item.classList.add("_hide");
            }
        });
    }

    window.addEventListener("scroll", checkScroll); // 🔹 10. Escucha el evento scroll para revisar cuándo mostrar los elementos
    checkScroll(); // 🔹 11. Ejecuta la función al cargar la página para mostrar los elementos visibles de inmediato
}


// Función para reinicializar el timeline cuando Astro cambia de página
export function reInitTimeline() {
    initTimeline(); // Vuelve a ejecutar la función cuando la página cambia
}

// 📌 ¿Qué hace?
// const itemTop = item.getBoundingClientRect().top + scrollY;

// item.getBoundingClientRect().top obtiene la posición del elemento relativa a la ventana.
// Sumamos scrollY para obtener su posición real en toda la página.
// 📌 Ejemplo
// Si un .timeline-item está a 500px desde el inicio de la página y el usuario ha hecho scroll 300px:

// item.getBoundingClientRect().top // 200 (porque está 200px desde el borde superior de la ventana)
// itemTop = 200 + 300; // 500 (posición real del elemento en toda la página)