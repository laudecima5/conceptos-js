//estrucutura condicional simple

/*

if(condicion logica){
todas las lineas de codigo que quiero que haga si se comlpe la condicion
}else{
todas las lineas de codigo que quiero que el programa haga si no se cumple la condicion
}

*/

//Pedir la edad y decir si es mayor de edad: Crear un algoritmo que pida la edad del usuario y determine 

//si es mayor de edad (18 años o más).


const edad = parseInt(prompt("Ingresa tu edad"));
console.log(edad)
//si la edad estra entre 0 y 110 años
if(edad > 0 && edad <= 110){
    if (edad >= 18) {
     alert("Sos mayor de edad");
    } else {
     alert("Sos menor de edad");
    }
}else{
    alert('valor erroneo')
}
