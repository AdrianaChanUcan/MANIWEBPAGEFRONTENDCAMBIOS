// ========================================
// LOGIN MODAL CON BOOTSTRAP
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Abrir modal de login
    const openLoginBtn = document.getElementById('open-login');
    if (openLoginBtn) {
        openLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const loginModal = new bootstrap.Modal(document.getElementById('login-modal'));
            loginModal.show();
        });
    }

    // Manejar formulario de login
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            
            console.log('Login intentado:', { username });
            
            // Simular validación
            if (username && password) {
                alert('Inicio de sesión exitoso');
                loginForm.reset();
                
                // Cerrar modal
                const loginModal = bootstrap.Modal.getInstance(document.getElementById('login-modal'));
                if (loginModal) {
                    loginModal.hide();
                }
            }
        });
    }

    // Manejar formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log('Formulario de contacto:', { name, email, message });
            alert('¡Mensaje enviado! Nos pondremos en contacto pronto.');
            contactForm.reset();
        });
    }
});

// Actualizar indicadores activos
const carousel = document.getElementById('galeria-carousel');
const markers = document.querySelectorAll('.carousel-marker');

carousel.addEventListener('scroll', () => {
    const scrollLeft = carousel.scrollLeft;
    const itemWidth = carousel.offsetWidth;
    const currentIndex = Math.round(scrollLeft / itemWidth);
    
    markers.forEach((marker, index) => {
        marker.classList.toggle('active', index === currentIndex);
    });
});
