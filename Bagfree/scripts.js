// Movimiento automático del carrusel
document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.carrusel');
    let scrollAmount = 0;

    function scrollCarrusel() {
        if (scrollAmount <= carrusel.scrollWidth - carrusel.clientWidth) {
            scrollAmount += 1;
            carrusel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        } else {
            scrollAmount = 0;
        }
    }

    setInterval(scrollCarrusel, 30); // Ajusta el tiempo para la velocidad
});
