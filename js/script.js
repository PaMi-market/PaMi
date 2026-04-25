/*
 * PaMi | Lo mereces todo 💜
 * Archivo de productos y filtrado
 */

// 📦 LISTA DE PRODUCTOS
// Aquí añadirás tus productos cuando tengas las fotos.
// Solo copia y pega el bloque de ejemplo y edita los datos.

const productos = [
    /*
    // EJEMPLO - Descomenta y copia este bloque para cada producto:
    {
        id: 1,
        nombre: "Nombre del producto",
        categoria: "ropa-estilo",  // Opciones: "ropa-estilo", "encargos-shein", "maquillaje", "accesorios"
        precio: "15.00",
        descripcion: "Descripción breve del producto.",
        imagen: "img/productos/ropa/mi-foto.jpg",
        whatsapp: "5356275010"  // Tu número de WhatsApp para este producto
    },
    */
];

// 📌 Función para filtrar productos por categoría
function filtrarCategoria(categoria) {
    // Quitar "activo" de todos los enlaces del menú
    document.querySelectorAll('.nav-categorias a').forEach(function(a) {
        a.classList.remove('activo');
    });
    
    // Actualizar texto de resultados
    var resultados = document.getElementById('resultados-categoria');
    
    if (categoria === 'todas') {
        // Marcar "Todas" como activo
        document.querySelector('.nav-categorias a[href="#inicio"]').classList.add('activo');
        resultados.textContent = 'Mostrando todas las categorías';
        mostrarProductos(productos);
    } else {
        // Marcar la categoría correspondiente
        var enlace = document.querySelector('.nav-categorias a[href="#' + categoria.split('-')[0] + '"]');
        if (enlace) enlace.classList.add('activo');
        
        // Filtrar productos
        var filtrados = productos.filter(function(p) {
            return p.categoria === categoria;
        });
        
        resultados.textContent = 'Mostrando: ' + categoria.replace('-', ' ');
        mostrarProductos(filtrados);
    }
}

// 🛍️ Función para mostrar productos en la cuadrícula
function mostrarProductos(lista) {
    var grid = document.getElementById('grid-productos');
    
    // Si no hay productos, mostrar mensaje
    if (lista.length === 0) {
        grid.innerHTML = 
            '<div class="sin-productos">' +
                '<div class="icono">📸</div>' +
                '<h3>¡Próximamente!</h3>' +
                '<p>Estamos preparando las fotos de nuestros productos.</p>' +
                '<p>Mientras tanto, puedes ver nuestro catálogo:</p>' +
                '<a href="https://laventanita.ecopodar.com/t/pa-mi" target="_blank" style="color:#7B2D8E; font-weight:bold;">🛍️ Ver catálogo PaMi</a>' +
            '</div>';
        return;
    }
    
    // Construir HTML de productos
    var html = '';
    lista.forEach(function(producto) {
        html += 
            '<div class="producto-card">' +
                '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" class="producto-imagen" onerror="this.src=\'img/placeholder.png\'">' +
                '<div class="producto-info">' +
                    '<div class="producto-categoria">' + producto.categoria.replace('-', ' ').toUpperCase() + '</div>' +
                    '<div class="producto-nombre">' + producto.nombre + '</div>' +
                    '<div class="producto-precio">$' + producto.precio + '</div>' +
                    '<div class="producto-descripcion">' + producto.descripcion + '</div>' +
                    '<a href="https://wa.me/' + producto.whatsapp + '?text=Hola%20PaMi,%20me%20interesa:%20' + encodeURIComponent(producto.nombre) + '" class="btn-comprar" target="_blank">' +
                        '📲 Comprar por WhatsApp' +
                    '</a>' +
                '</div>' +
            '</div>';
    });
    
    grid.innerHTML = html;
}

// 🚀 Iniciar la página mostrando todos los productos
mostrarProductos(productos);
