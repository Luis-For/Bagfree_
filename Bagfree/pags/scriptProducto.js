document.querySelectorAll('.producto-card').forEach(card => {
    const comprarBtn = card.querySelector('.btn-success');
    const cancelarBtn = card.querySelector('.btn-danger');

    // Acción de Comprar
    comprarBtn.addEventListener('click', () => {
        alert("¡Producto agregado al carrito!");
    });

    // Acción de Cancelar
    cancelarBtn.addEventListener('click', () => {
        alert("Operación cancelada.");
    });
});
