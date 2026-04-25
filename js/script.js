/*
 * PaMi | Lo mereces todo 💜
 * Catálogo propio de productos
 * Añade tus productos abajo en el array 'productos'
 */

// 📦 CATÁLOGO DE PRODUCTOS
// Copia y pega el bloque de ejemplo para cada producto nuevo
// Cuando tengas fotos, súbelas a img/productos/ y escribe la ruta en "imagen"

const productos = [
    /*
    // ===== EJEMPLO PARA AÑADIR PRODUCTOS =====
    // Copia desde aquí...
    {
        id: 1,
        nombre: "Vestido Floral Primavera",
        categoria: "ropa-estilo",         // Opciones: "ropa-estilo", "encargos-shein", "maquillaje", "accesorios"
        precio: "15.00",
        descripcion: "Vestido floral talla M, perfecto para primavera.",
        imagen: "img/productos/ropa/vestido-floral.jpg",
        whatsapp: "5356275010"
    },
    // ...hasta aquí, y pega debajo cambiando los datos
    */
];

// =============================================
// NO TOCAR DEBAJO DE ESTA LÍNEA
// =============================================

// Función para filtrar productos por categoría
function filtrarCategoria(categoria) {
    document.querySelectorAll('.nav-categorias a').forEach(function(a) {
        a.classList.remove('activo');
    });
    
    var resultados = document.getElementById('resultados-categoria');
    
    if (categoria === 'todas') {
        document.querySelector('.nav-categorias a[href="#inicio"]').classList.add('activo');
        resultados.textContent = 'Mostrando todas las categorías (' + productos.length + ' productos)';
        mostrarProductos(productos);
    } else {
        var enlace = document.querySelector('.nav-categorias a[href="#' + categoria.split('-')[0] + '"]');
        if (enlace) enlace.classList.add('activo');
        
        var filtrados = productos.filter(function(p) {
            return p.categoria === categoria;
        });
        
        resultados.textContent = 'Mostrando: ' + categoria.replace('-', ' ') + ' (' + filtrados.length + ' productos)';
        mostrarProductos(filtrados);
    }
}

// Función para mostrar productos en el grid
function mostrarProductos(lista) {
    var grid = document.getElementById('grid-productos');
    
    if (lista.length === 0) {
        grid.innerHTML = 
            '<div class="sin-productos">' +
                '<div class="icono">📸</div>' +
                '<h3>¡Próximamente!</h3>' +
                '<p>Estamos preparando nuestro catálogo.</p>' +
                '<p>Pronto verás aquí todos nuestros productos con fotos, precios y descripciones.</p>' +
                '<p style="margin-top:15px;">📲 Mientras tanto, escríbenos a WhatsApp y te enviamos el catálogo completo:</p>' +
                '<a href="https://wa.me/5356275010" target="_blank" style="display:inline-block; background:#25D366; color:white; padding:10px 20px; border-radius:25px; text-decoration:none; font-weight:bold; margin-top:10px;">📲 Pedir catálogo por WhatsApp</a>' +
            '</div>';
        return;
    }
    
    var html = '';
    lista.forEach(function(producto) {
        html += 
            '<div class="producto-card">' +
                '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" class="producto-imagen" onerror="this.src=\'img/placeholder.png\'">' +
                '<div class="producto-info">' +
                    '<div class="producto-categoria">' + formatearCategoria(producto.categoria) + '</div>' +
                    '<div class="producto-nombre">' + producto.nombre + '</div>' +
                    '<div class="producto-precio">$' + producto.precio + '</div>' +
                    '<div class="producto-descripcion">' + producto.descripcion + '</div>' +
                    '<a href="https://wa.me/' + producto.whatsapp + '?text=Hola%20PaMi,%20me%20interesa:%20' + encodeURIComponent(producto.nombre) + '" class="btn-comprar" target="_blank">' +
                        '📲 Consultar por WhatsApp' +
                    '</a>' +
                '</div>' +
            '</div>';
    });
    
    grid.innerHTML = html;
}

// Formatear nombre de categoría para mostrar
function formatearCategoria(cat) {
    var nombres = {
        'ropa-estilo': '👗 Ropa y Estilo',
        'encargos-shein': '📦 Encargos Shein',
        'maquillaje': '💄 Maquillaje',
        'accesorios': '💍 Accesorios'
    };
    return nombres[cat] || cat.toUpperCase();
}

// Iniciar mostrando todos los productos
mostrarProductos(productos);
