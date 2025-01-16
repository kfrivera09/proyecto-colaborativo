
/* Usando ciclos en JavaScript 

Ejercicio 1: Dado un valor por el usuario que imprima la suma de todos los números 
Ejercicio 2: Escribe un programa que imprima los números del 1 al 10 utilizando un ciclo for.
Ejercicio 4: Ingresa edades el  programa que cuente cuántas personas son mayores de 18 años.
Ejercicio 7: Crea un programa que imprima los primeros 5 números impares utilizando un ciclo while
Adicional: dado un numero y un limete mustre la tabla de multiplicar de ese numero hasta ese limite */

/* ejer 1 */

function suma (event){
let numero = prompt("Ingrese un número");
let suma = 0;

for (let i = 1; i <= numero; i++) {
  suma += i;
}

alert("La suma de los números del 1 al " + numero + " es: " + suma);
}

/* ejer 2 */

function conteo (event){
    for (let i = 1; i <= 10; i++) {
        alert(i);
      }     
}

/* ejer 3 */

function edades (event){
let edad = prompt("Ingrese la edad de la persona");
let contador = 0;

while (edad !== "fin") {
  if (edad >= 18) {
    contador++;
  }
  edad = prompt("Ingrese la edad de la persona (escriba 'fin' para terminar)");
}

alert("Hay " + contador + " personas mayores de 18 años.");

}

/* ejer 4 */

function imprimir (event){
    let i = 1;
let contador = 0;

while (contador < 5) {
  if (i % 2 !== 0) {
    alert(i);
    contador++;
  }
  i++;
}
}

/* ejer 5 */

function limite (event){

let numero = prompt("Ingrese un número");
let limite = prompt("Ingrese el límite");

alert("Tabla de multiplicar del " + numero + " hasta el " + limite);

for (let i = 1; i <= limite; i++) {
  alert(`${numero} x ${i} = ${numero * i}`);
}
}

/* Actividad del inventario */

function inventario() {
  // Inicializa el inventario con productos
  let inventario = [
    { nombre: "Televisor 4K", codigo: "TV001", cantidad: 10, precio: 300 },
    { nombre: "Auriculares Bluetooth", codigo: "AU002", cantidad: 2, precio: 50 },
    { nombre: "Smartphone", codigo: "SP003", cantidad: 0, precio: 500 },
    { nombre: "Laptop", codigo: "LP004", cantidad: 15, precio: 800 }
  ];

  // Ciclo infinito para mostrar el menú
  while (true) {
    // Muestra el menú y solicita la opción
    let opcion = prompt("Ingrese una opción:\n1. Verificar stock\n2. Actualizar stock\n3. Agregar producto\n4. Eliminar producto\n5. Mostrar inventario\n6. Buscar producto\n7. Precio total\n8. Ordenar inventario\n9. Verificar productos en stock\n10. Duplicar precio de productos en stock\n11. Reemplazar producto\n12. Salir");

    // Maneja la opción seleccionada
    switch (opcion) {
      case "1":
        // Verifica el stock de cada producto
        inventario.forEach(producto => {
          if (producto.cantidad === 0) {
            alert(`Producto ${producto.nombre} agotado.`);
          } else if (producto.cantidad <= 5) {
            alert(`Producto ${producto.nombre} próximo a agotarse.`);
          } else {
            alert(`Producto ${producto.nombre} en stock.`);
          }
        });
        break;

      case "2":
        // Actualiza el stock de un producto
        let codigo = prompt("Ingrese el código del producto:");
        let nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad:"));
        const producto = inventario.find(producto => producto.codigo === codigo);
        if (producto) {
          producto.cantidad = nuevaCantidad;
          alert(`Stock de ${producto.nombre} actualizado a ${nuevaCantidad}.`);
        } else {
          alert(`Producto con código ${codigo} no encontrado.`);
        }
        break;

      case "3":
        // Agrega un nuevo producto al inventario
        let nombre = prompt("Ingrese el nombre del producto:");
        let codigoNuevo = prompt("Ingrese el código del producto:");
        let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        const nuevoProducto = { nombre, codigo: codigoNuevo, cantidad, precio };
        inventario.push(nuevoProducto);
        alert(`Producto ${nombre} agregado al inventario.`);
        break;

      case "4":
        // Elimina un producto del inventario
        let codigoEliminar = prompt("Ingrese el código del producto:");
        const indice = inventario.findIndex(producto => producto.codigo === codigoEliminar);
        if (indice !== -1) {
          inventario.splice(indice, 1);
          alert(`Producto con código ${codigoEliminar} eliminado del inventario.`);
        } else {
          alert(`Producto con código ${codigoEliminar} no encontrado.`);
        }
        break;

      case "5":
        // Muestra el inventario completo
        let mensaje = "";
        inventario.forEach(producto => {
          mensaje += `Nombre: ${producto.nombre}, Código: ${producto.codigo}, Cantidad: ${producto.cantidad}, Precio: ${producto.precio}\n`;
          if (producto.cantidad > 0) {
            mensaje += `Valor total: ${producto.precio * producto.cantidad}\n\n`;
          }
        });
        alert(mensaje);
        break;

      case "6":
        // Busca un producto por nombre
        let nombreBuscar = prompt("Ingrese el nombre del producto:");
        const productoBuscar = inventario.find(producto => producto.nombre === nombreBuscar);
        if (productoBuscar) {
          alert(`Código: ${productoBuscar.codigo}, Cantidad: ${productoBuscar.cantidad}`);
        } else {
          alert(`Producto ${nombreBuscar} no encontrado.`);
        }
        break;

      case "7":
        // Calcula el precio total del inventario
        const precioTotal = inventario.reduce((acumulado, producto) => acumulado + producto.precio * producto.cantidad, 0);
        alert(`Precio total del inventario: ${precioTotal}`);
        break;

        case "8":
          // Ordena el inventario por precio
          inventario.sort((a, b) => a.precio - b.precio);
          alert("Inventario ordenado por precio:");
          mensaje = "";
          inventario.forEach(producto => {
            mensaje += `Nombre: ${producto.nombre}, Código: ${producto.codigo}, Cantidad: ${producto.cantidad}, Precio: ${producto.precio}\n`;
            if (producto.cantidad > 0) {
              mensaje += `Valor total: ${producto.precio * producto.cantidad}\n\n`;
            }
          });
          alert(mensaje);
          break;
  
        case "9":
          // Verifica si hay productos en stock
          const hayProductosEnStock = inventario.some(producto => producto.cantidad > 5);
          alert(`Hay productos en stock: ${hayProductosEnStock}`);
          break;
  
        case "10":
          // Duplica el precio de los productos en stock
          inventario.forEach(producto => {
            if (producto.cantidad > 5) {
              producto.precio *= 1.2;
            }
          });
          alert("Productos en stock con precio duplicado:");
          mensaje = "";
          inventario.forEach(producto => {
            mensaje += `Nombre: ${producto.nombre}, Código: ${producto.codigo}, Cantidad: ${producto.cantidad}, Precio: ${producto.precio}\n`;
            if (producto.cantidad > 0) {
              mensaje += `Valor total: ${producto.precio * producto.cantidad}\n\n`;
            }
          });
          alert(mensaje);
          break;
  
        case "11":
          // Reemplaza un producto
          let codigoReemplazar = prompt("Ingrese el código del producto:");
          const indiceReemplazar = inventario.findIndex(producto => producto.codigo === codigoReemplazar);
          if (indiceReemplazar !== -1) {
            const nuevoProducto = {
              nombre: "Reproductor Blu-ray",
              codigo: "RB006",
              cantidad: 10,
              precio: 150
            };
            inventario.splice(indiceReemplazar, 1, nuevoProducto);
            alert(`Producto con código ${codigoReemplazar} reemplazado.`);
          } else {
            alert(`Producto con código ${codigoReemplazar} no encontrado.`);
          }
          break;
  
        case "12":
          // Sale del programa
          alert("Hasta luego!");
          return;
  
        default:
          // Maneja opciones inválidas
          alert("Opción inválida. Por favor, intente de nuevo.");
      }
    }
  }
  
  inventario();
  
        
