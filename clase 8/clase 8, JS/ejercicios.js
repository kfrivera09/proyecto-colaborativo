function votar (event){
    /*event.preventDefault();*/
    let edad = prompt ("Digite su edad");

    if(edad >= 18){

        alert("Puedes ingresar a votar");

    }else 

    alert("lo sentimos no tienes edad suficiente para avotar");
}

function conducir (event){
    let ed1 = prompt ("Digite su edad");

    if(ed1 >= 18){

        alert("eres mayor de edad, Puede conducir");

    }else 

    alert("lo sentimos no tienes edad suficiente para manejar");
}

function parimp (event){
    let n1 = prompt("digite un numero");
    let rs = n1%2;

    if(rs == 0 ){
        alert("el numero es par "+n1);
    }else
    alert("El numero es impar "+n1);
}

function adulto (event){
    let ed2 = prompt ("Digite su edad");

    if(ed2 >= 18){

        alert("eres mayor de edad");

    }else 

    alert("Usted es menor de edad");
}

function ejer5(event){
    let nota = prompt ("digite su nota final");

    if (nota >= 6 ){
        alert("Usted aprobo la materia");
    }else 
    alert("no aprobo la materia");
}

function ejer6 (event){
    let n3 = prompt ("digite un numero"); 

    if (n3 >= 0 ){
        alert("el numero es positivo");
    }else 
    alert ("el numero es negativo");
}

function ejer7(event){
    let ed4 = prompt ("digite su edad para el descuento");

    if (ed4 > 18 && edad < 65){
        alert("no tienes descuento");
    }else 
    alert ("si tienes el descuento");
}

function ejer8(event){
    let mes = prompt ("digite el numero del mes");

    if (mes == 12 && mes <= 3){

        alert ("es invierno");

    }else if (mes >= 6 && mes <= 9){
        alert("es verano");
    }else if (mes > 9 && mes < 12){
        alert("es otoño");
    }else
    alert("es primavera");
}

function ejer9(event){
    let invitacion = promt("Usted tiene invitacion");

    if (invitacion = "si") {
        alert("puedes asistir");
    } else {
        alert("lo sentimos no puedes asistir");
    }
}
/* falta corregir */
function ejer10 (event){
    let anio=prompt("digite el año");
        if (anio % 4 === 0) {
          if (anio % 100 === 0) {
            if (anio % 400 === 0) {
              alert("el año es bisiesto");
            } else {
                alert("el año NO es bisiesto");
            }
          } else {
            alert("el año NO es bisiesto");
          }
        } else {
            alert("el año NO es bisiesto");
        }
      }

function ejer11(event){
    let edad5 = prompt("Digite su edad");

    if (edad5 >= 18) {
        alert("eres mayor de edad puedes comprar alchool");
    } else {
        alert("lo sentimos eres menor de edad, no te podemos vender alcohol");
    }
}

function ejer12(event){
    let edad6 =prompt("digite su edad");

    if (edad6 >= 18 && edad6 <= 35) {
        alert("usted es un adulto joven su edad es "+ edad6);
    } else if(edad6 >= 36 && edad6 <= 64){
        alert("usted es un adulto su edad es "+ edad6);

    }else 
    alert ("usted es una persona mayor");
}