let carrito = [];
let cantidad = document.getElementById("cantidad");
let total = document.getElementById("total");
let listaCarrito = document.getElementById("listaCarrito");

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    listaCarrito.innerHTML = "";
    let suma = 0;

    carrito.forEach(function(producto) {
        let elemento = document.createElement("p");
        elemento.textContent = producto.nombre + " - $" + producto.precio;
        listaCarrito.appendChild(elemento);
        suma = suma + producto.precio;
    });

    cantidad.textContent = carrito.length;
    total.textContent = suma;
}

function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}

document.getElementById("verCarrito").addEventListener("click", function() {
    document.getElementById("carrito").scrollIntoView();
});