
let nombreUsuario = "";


function ingresoUsuario() {
    nombreUsuario = prompt("Hola, bienvenido a Norteña Deco. Ingresa tu nombre para comenzar:   ");

}

ingresoUsuario();

console.log(`Usuario ${nombreUsuario} ha ingresado al sistema.`);
alert(`Hola ${nombreUsuario}, bienvenido a Norteña Deco. Aquí podrás llevar el control de stock de nuestros productos.`);


// array de productos //

let productos = [];

// funcion para agregar producto //

function ingresarProducto() {
    let nombre = prompt("Ingresá el nombre del producto:");
    let talle = prompt("Ingresá el tamaño/talle del producto:");
    let color = prompt("Ingresá el color del producto:");

    productos.push({ nombre, talle, color });
    console.log(`Ingresado producto: ${nombre} ${talle} ${color}`);
    alert(`✅ Producto ${nombre} ${talle} ${color} agregado al stock`);
}

// funcion para mostrar el stock //

function verStock() {
    if (productos.length === 0) {
        alert("No hay productos cargados todavía.");
    } else {
        let lista = "Stock actual:\n";
        productos.forEach((prod, i) => {
            lista += `${i + 1}. ${prod.nombre} - Talle: ${prod.talle} - Color: ${prod.color}\n`;
        });
        console.log("Mostrando stock actual")
        alert(lista);
    }
}

// asignacion de funcion al boton que hice para ver stock//

const btnVerStock = document.getElementById("btnVerStock");

btnVerStock.addEventListener("click", (e) => {
    e.preventDefault();
    verStock();
});

// adignacion de funcion al boton que hice para agregar producto //

const btnAgregarProducto = document.getElementById("btnAgregarProducto");

btnAgregarProducto.addEventListener("click", (e) => {
    e.preventDefault();
    ingresarProducto();
});
