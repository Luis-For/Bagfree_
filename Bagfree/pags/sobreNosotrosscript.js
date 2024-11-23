// Detectar cuando los elementos son visibles en la pantalla
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const sobreNosotrosItems = document.querySelectorAll('.sobre-nosotros-item');

    function showItemsOnScroll() {
        timelineItems.forEach(item => {
            if (item.getBoundingClientRect().top < window.innerHeight) {
                item.classList.add('show');
            }
        });

        sobreNosotrosItems.forEach(item => {
            if (item.getBoundingClientRect().top < window.innerHeight) {
                item.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', showItemsOnScroll);
    showItemsOnScroll(); // Llamar al inicio para ver si ya están en vista al cargar la página
});
