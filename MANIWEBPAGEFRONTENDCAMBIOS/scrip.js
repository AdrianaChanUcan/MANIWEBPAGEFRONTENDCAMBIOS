document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LÓGICA DE NAVEGACIÓN (PESTAÑAS)
    const menuItems = document.querySelectorAll('.menu-item[data-target]');
    const sections = document.querySelectorAll('.view-section');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Quitar activo de todos los menús
            menuItems.forEach(i => i.classList.remove('active'));
            // Activar el clicado
            item.classList.add('active');

            // Ocultar todas las secciones
            sections.forEach(sec => sec.style.display = 'none');
            
            // Mostrar la sección objetivo
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // 2. CERRAR SESIÓN
    const btnLogout = document.getElementById('btnLogout');
    btnLogout.addEventListener('click', () => {
        if(confirm('¿Estás seguro de que quieres salir?')) {
            // Redirigir al inicio
            window.location.href = 'index.html'; 
        }
    });

    // 3. PREVISUALIZACIÓN DE IMAGEN (Formulario Principal)
    const imageInput = document.getElementById('imageUpload');
    const previewImage = document.getElementById('previewImage');

    if(imageInput) {
        imageInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    // Actualizamos la fuente de la imagen en la tarjeta
                    previewImage.src = e.target.result;
                }
                
                reader.readAsDataURL(file);
            }
        });
    }

    // 4. LÓGICA DEL EDITOR DE TEXTO (Igual que antes)
    const inputs = {
        name: document.getElementById('inputName'),
        slogan: document.getElementById('inputSlogan'),
        cost: document.getElementById('inputCost'),
        time: document.getElementById('inputTime'),
        address: document.getElementById('inputAddress'),
        desc: document.getElementById('inputDesc')
    };
    const previews = {
        name: document.getElementById('previewName'),
        slogan: document.getElementById('previewSlogan'),
        cost: document.getElementById('previewCost'),
        time: document.getElementById('previewTime'),
        address: document.getElementById('previewAddress'),
        desc: document.getElementById('previewDesc'),
        category: document.getElementById('previewCategory')
    };

    function updatePreview(key, defaultText) {
        if(inputs[key]) {
            inputs[key].addEventListener('input', (e) => {
                previews[key].textContent = e.target.value || defaultText;
                if(key === 'slogan') previews.category.textContent = e.target.value.split(' ')[0] || 'CATEGORÍA';
            });
        }
    }

    updatePreview('name', 'Nombre del Negocio');
    updatePreview('slogan', 'Categoría');
    updatePreview('cost', '$$$');
    updatePreview('time', '00:00 - 00:00');
    updatePreview('address', 'Dirección');
    updatePreview('desc', 'Descripción...');
    
    // 5. GALERÍA DRAG & DROP (Simulado Visual)
    const dropZone = document.getElementById('dropZone');
    dropZone.addEventListener('click', () => document.getElementById('galleryInput').click());
});
// Login del administrador
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            
            // Verificar credenciales de admin
            if (username === 'admin' && password === 'admin') {
                // Redirigir al dashboard
                window.location.href = 'Dahboard-cliente.html';
            } else {
                // Mostrar error si las credenciales son incorrectas
                alert('Usuario o contraseña incorrectos');
            }
        });
    }
});