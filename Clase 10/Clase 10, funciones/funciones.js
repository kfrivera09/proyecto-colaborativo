// Función principal calculadora
function calculadora() {

    while(true){
    let opcion = prompt("Ingrese una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Contar número pares\n6. Verificar si un número es primo\n7. Encontrar el número más grande en un arreglo\n8. Verificar si un número está en un arreglo\n9. Salir");
    switch (opcion) {
      case "1":
        sumar();
        break;
      case "2":
        restar();
        break;
      case "3":
        multiplicar();
        break;
      case "4":
        dividir();
        break;
      case "5":
        contarPares();
        break;
      case "6":
        verificarPrimo();
        break;
      case "7":
        encontrarMayor();
        break;
      case "8":
        verificarArreglo();
        break;
      case "9":
            // Sale del programa
            alert("Hasta luego!");
        return;
    
      default:
        alert("Opción inválida");
    }
   }
  }
  
  // Funciones anidadas
  function sumar() {
    let num1 = prompt("Ingrese el primer número");
    let num2 = prompt("Ingrese el segundo número");
    let resultado = parseInt(num1) + parseInt(num2);
    alert(`El resultado es: ${resultado}`);
  }
  
  function restar() {
    let num1 = prompt("Ingrese el primer número");
    let num2 = prompt("Ingrese el segundo número");
    let resultado = parseInt(num1) - parseInt(num2);
    alert(`El resultado es: ${resultado}`);
  }
  
  function multiplicar() {
    let num1 = prompt("Ingrese el primer número");
    let num2 = prompt("Ingrese el segundo número");
    let resultado = parseInt(num1) * parseInt(num2);
    alert(`El resultado es: ${resultado}`);
  }
  
  function dividir() {
    let num1 = prompt("Ingrese el primer número");
    let num2 = prompt("Ingrese el segundo número");
    if (num2 === "0") {
      alert("No se puede dividir por cero");
    } else {
      let resultado = parseInt(num1) / parseInt(num2);
      alert(`El resultado es: ${resultado}`);
    }
  }
  
  function contarPares() {
    let n = prompt("Ingrese el número de veces");
    let suma = 0;
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        suma += i;
      }
    }
    alert(`La suma de los números pares es: ${suma}`);
  }
  
  function verificarPrimo() {
    let num = prompt("Ingrese un número");
    let esPrimo = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) {
      alert(`El número ${num} es primo`);
    } else {
      alert(`El número ${num} no es primo`);
    }
  }
  
  function encontrarMayor() {
    let arreglo = prompt("Ingrese un arreglo de números separados por comas");
    let numeros = arreglo.split(",");
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (parseInt(numeros[i]) > parseInt(mayor)) {
        mayor = numeros[i];
      }
    }
    alert(`El número más grande en el arreglo es: ${mayor}`);
  }
  
  function verificarArreglo() {
    let arreglo = prompt("Ingrese un arreglo de números separados por comas");
    let numeros = arreglo.split(",");
    let num = prompt("Ingrese un número para buscar en el arreglo");
    if (numeros.includes(num)) {
      alert(`El número ${num} está en el arreglo`);
    } else {
      alert(`El número ${num} no está en el arreglo`);
    }
  }
