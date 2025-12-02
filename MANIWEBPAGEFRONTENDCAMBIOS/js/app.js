// ========================================
// APLICACIÓN PRINCIPAL - MANÍ PUEBLO MÁGICO
// ========================================

// ========================================
// DATOS DE NEGOCIOS
// ========================================
const negociosData = [
    {
        nombre: 'Restaurante Tutul -Xiu',
        categoria: 'restaurante',
        descripcion: 'Comida tradicional yucateca',
        telefono: '(999) 123-4567',
        ubicacion: 'Centro del pueblo',
        horarios: '12:00 - 22:00',
        metodosPago: ['efectivo'],
        emoji: '🍽️'
    },
    {
        nombre: 'Taller de Bordado',
        categoria: 'artesania',
        descripcion: 'Talleres de bordado',
        telefono: '(999) 234-5678',
        ubicacion: 'Calle Principal',
        horarios: '10:00 - 17:00',
        metodosPago: ['efectivo', 'tarjeta'],
        emoji: '🎨'
    },
    {
        nombre: 'Posada Doña Mary',
        categoria: 'hospedaje',
        descripcion: 'Hospedaje cómodo y acogedor',
        telefono: '(999) 345-6789',
        ubicacion: 'Entrada al pueblo',
        horarios: '24 horas',
        metodosPago: ['tarjeta', 'transferencia'],
        emoji: '🏨'
    },
    {
        nombre: 'Guía Turístico - Ayuntamiento',
        categoria: 'guia',
        descripcion: 'Tours personalizados por Maní',
        telefono: '(999) 456-7890',
        ubicacion: 'Plaza Central',
        horarios: '8:00 - 18:00',
        metodosPago: ['efectivo', 'tarjeta'],
        emoji: '👤'
    },
    {
        nombre: 'Cenote Xcabachen',
        categoria: 'cenote',
        descripcion: 'Cenote natural con servicios',
        telefono: '(999) 567-8901',
        ubicacion: '2 km del centro',
        horarios: '8:00 - 18:00',
        metodosPago: ['efectivo'],
        emoji: '💧'
    },
    {
        nombre: 'Casa de Artesanías Doña Ericka',
        categoria: 'artesania',
        descripcion: 'Venta de artesanías locales',
        telefono: '(999) 678-9012',
        ubicacion: 'Centro del pueblo',
        horarios: '10:00 - 18:00',
        metodosPago: ['efectivo', 'tarjeta', 'transferencia'],
        emoji: '🎨'
    },
    {
        nombre: 'Restaurante La Conquista',
        categoria: 'restaurante',
        descripcion: 'Cocina yucateca auténtica',
        telefono: '(999) XXXXXXX',
        ubicacion: 'Centro del pueblo',
        horarios: '11:00 - 21:00',
        metodosPago: ['tarjeta', 'transferencia'],
        emoji: '🍽️'
    },
    {
        nombre: 'Meliponario U luul meel ',
        categoria: 'otro',
        descripcion: 'Producción de miel de abeja melipona',
        telefono: '(999) XXXXXXX',
        ubicacion: 'Candelaria',
        horarios: 'Previa cita',
        metodosPago: ['efectivo', 'tarjeta'],
        emoji: '🐝'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // CARGAR DATOS DE DIRECTORIO Y FILTROS
    // ========================================
    loadNegociosFiltrados();
    setupPaymentFilters();

    // ========================================
    // LOGIN MODAL CON BOOTSTRAP
    // ========================================
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
        
        // Verificar si es el administrador
        if (username === 'admin' && password === 'admin') {
            // Redirigir al dashboard de administrador
            window.location.href = 'Dahboard-cliente.html';
        } 
        // Validación para otros usuarios
        else if (username && password) {
            alert('Inicio de sesión exitoso');
            loginForm.reset();
            
            // Cerrar modal
            const loginModal = bootstrap.Modal.getInstance(document.getElementById('login-modal'));
            if (loginModal) {
                loginModal.hide();
            }
        } 
        // Si faltan credenciales
        else {
            alert('Por favor ingresa usuario y contraseña');
        }
    });
}
    // ========================================
    // FORMULARIO DE CONTACTO
    // ========================================
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

    // ========================================
    // BÚSQUEDA EN NAVBAR
    // ========================================
    const searchNav = document.getElementById('search-nav');
    if (searchNav) {
        searchNav.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchNav.value.trim().toLowerCase();
                if (query) {
                    console.log('Búsqueda en navbar:', query);
                    window.location.href = `directorio.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }

    // ========================================
    // BÚSQUEDA AVANZADA EN DIRECTORIO
    // ========================================
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    const searchMain = document.getElementById('search-main');
    if (searchMain) {
        searchMain.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const searchTerm = document.getElementById('search-main')?.value.toLowerCase() || '';
        const categoryFilter = document.getElementById('category-filter')?.value || '';
        
        console.log('Búsqueda:', { searchTerm, categoryFilter });
        alert(`Buscando: "${searchTerm}" en ${categoryFilter || 'todas las categorías'}`);
    }

    // ========================================
    // CERRAR ALERTA ESTRATÉGICA
    // ========================================
    window.closeStrategicAlert = function() {
        const alert = document.getElementById('strategic-alert');
        if (alert) {
            alert.style.display = 'none';
        }
    };

    // ========================================
    // ANIMACIÓN DE SCROLL SUAVE
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#login-modal') {
                return;
            }
            
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================
    // INICIALIZAR TOOLTIPS
    // ========================================
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ========================================
    // CARGAR DATOS DE DIRECTORIO
    // ========================================
    loadDirectoryData();
});

// ========================================
// FUNCIÓN PARA CARGAR NEGOCIOS FILTRADOS
// ========================================
function loadNegociosFiltrados() {
    const container = document.getElementById('negocios-container');
    if (!container) return;
    renderNegociosFiltrados();
}

// ========================================
// FUNCIÓN PARA CONFIGURAR FILTROS DE PAGO
// ========================================
function setupPaymentFilters() {
    const paymentFilters = document.querySelectorAll('.payment-filter');
    paymentFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            renderNegociosFiltrados();
        });
    });
}

// ========================================
// FUNCIÓN PARA RENDERIZAR NEGOCIOS FILTRADOS
// ========================================
function renderNegociosFiltrados() {
    const container = document.getElementById('negocios-container');
    if (!container) return;

    const paymentFilters = document.querySelectorAll('.payment-filter:checked');
    const selectedMethods = Array.from(paymentFilters).map(f => f.value);

    console.log('Métodos seleccionados:', selectedMethods);

    container.innerHTML = '';

    const negociosFiltrados = negociosData.filter(negocio => {
        if (selectedMethods.length === 0) return true;
        return negocio.metodosPago.some(metodo => selectedMethods.includes(metodo));
    });

    if (negociosFiltrados.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center" role="alert">
                    <strong>⚠️ Sin resultados</strong><br>
                    No hay negocios disponibles con los métodos de pago seleccionados.
                </div>
            </div>
        `;
        return;
    }

    negociosFiltrados.forEach(negocio => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6';
        card.innerHTML = `
            <div class="card negocio-filtrado-card h-100">
                <div class="negocio-filtrado-header">
                    <h5 class="negocio-filtrado-title">${negocio.emoji} ${negocio.nombre}</h5>
                    <span class="negocio-filtrado-category">${negocio.categoria}</span>
                </div>
                <div class="card-body">
                    <p class="negocio-filtrado-info"><strong>Descripción:</strong> ${negocio.descripcion}</p>
                    <p class="negocio-filtrado-info"><strong>📞</strong> ${negocio.telefono}</p>
                    <p class="negocio-filtrado-info"><strong>📍</strong> ${negocio.ubicacion}</p>
                    <p class="negocio-filtrado-info"><strong>⏰</strong> ${negocio.horarios}</p>
                    <div class="mt-3">
                        ${negocio.metodosPago.map(metodo => {
                            const badges = {
                                'efectivo': { emoji: '💰', clase: 'badge-efectivo', texto: 'Efectivo' },
                                'tarjeta': { emoji: '💳', clase: 'badge-tarjeta', texto: 'Tarjeta' },
                                'transferencia': { emoji: '📱', clase: 'badge-transferencia', texto: 'Transferencia' }
                            };
                            const badge = badges[metodo];
                            return `<span class="payment-method-badge ${badge.clase}">${badge.emoji} ${badge.texto}</span>`;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    console.log(`Mostrando ${negociosFiltrados.length} negocios`);
}

// ========================================
// FUNCIÓN PARA CARGAR DATOS DEL DIRECTORIO
// ========================================
function loadDirectoryData() {
    const directorioContainer = document.getElementById('directorio-container');
    if (!directorioContainer) return;

    directorioContainer.innerHTML = '';

    negociosData.forEach(negocio => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6';
        card.innerHTML = `
            <div class="card directorio-card h-100">
                <div class="directorio-card-header">
                    <h5 class="directorio-card-title">${negocio.emoji} ${negocio.nombre}</h5>
                    <span class="directorio-card-category">${negocio.categoria}</span>
                </div>
                <div class="card-body">
                    <p class="directorio-info-text"><strong>Descripción:</strong> ${negocio.descripcion}</p>
                    <p class="directorio-info-text"><strong>📞</strong> ${negocio.telefono}</p>
                    <p class="directorio-info-text"><strong>📍</strong> ${negocio.ubicacion}</p>
                    <p class="directorio-info-text"><strong>⏰</strong> ${negocio.horarios}</p>
                    <div class="mt-2">
                        ${negocio.metodosPago.map(metodo => {
                            const badges = {
                                'efectivo': { emoji: '💰', clase: 'badge-efectivo', texto: 'Efectivo' },
                                'tarjeta': { emoji: '💳', clase: 'badge-tarjeta', texto: 'Tarjeta' },
                                'transferencia': { emoji: '📱', clase: 'badge-transferencia', texto: 'Transferencia' }
                            };
                            const badge = badges[metodo];
                            return `<span class="payment-method-badge ${badge.clase}">${badge.emoji} ${badge.texto}</span>`;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
        directorioContainer.appendChild(card);
    });
}

// ========================================
// FUNCIÓN PARA ANALIZAR PARÁMETROS DE URL
// ========================================
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queries = queryString.split('&');
    
    queries.forEach(query => {
        const pair = query.split('=');
        if (pair[0]) {
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
    });
    
    return params;
}

// ========================================
// FUNCIÓN PARA FILTRAR DIRECTORIO POR BÚSQUEDA
// ========================================
function filterDirectoryBySearch(searchTerm) {
    const searchMain = document.getElementById('search-main');
    if (searchMain) {
        searchMain.value = searchTerm;
    }
}

// ========================================
// CARGAR BÚSQUEDA DE PARÁMETROS DE URL
// ========================================
window.addEventListener('load', () => {
    const params = getUrlParams();
    if (params.search) {
        filterDirectoryBySearch(params.search);
    }
});

// ========================================
// FUNCIONES AUXILIARES
// ========================================

function showNotification(message, type = 'info') {
    const alertClass = {
        'info': 'alert-info',
        'success': 'alert-success',
        'warning': 'alert-warning',
        'danger': 'alert-danger'
    }[type] || 'alert-info';

    const alertHTML = `
        <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;

    const container = document.querySelector('.container');
    if (container) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = alertHTML;
        container.insertBefore(tempDiv.firstElementChild, container.firstChild);
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

console.log('✨ Maní Pueblo Mágico - Aplicación cargada correctamente');
