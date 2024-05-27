document.addEventListener('DOMContentLoaded', function() {
    const ctaFinal = document.getElementById('ctaFinal');

    ctaFinal.addEventListener('mouseup', function() {
        mostrarMensaje();
    });

    function mostrarMensaje() {
        const form = document.querySelector('.form');
        const nombreUsuario = form.querySelector('input[name="input-name"]').value;
        const correoUsuario = form.querySelector('input[name="input-email"]').value;
        if (nombreUsuario && correoUsuario) {
            const mensaje = `¡Gracias por inscribirte, ${nombreUsuario}! Pronto estaras recibiendo a ${correoUsuario} tu calendario personalizado.🤘`;
            alert(mensaje);
            window.location.href = "#";
        } else {
            alert('¡Ey! Si quieres recibir tu calendario personalizado, necesitamos que ingreses tu nombre y tu correo electrónico.');
        }
    }
});
