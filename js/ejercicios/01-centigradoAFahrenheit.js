//crear un programa que calcule cuantos grados fahrenheit son X grados centigrados. Formula = (x °C × 9/5) + 32
document.writeln('<h1>Ejercicio</h1>');

let gradoCentigrado = parseInt(prompt('Ingresa los grados centígrados'));
const gradoFahrenheit = (gradoCentigrado * 9 / 5) + 32;

document.writeln(`Los grados centígrados ${gradoCentigrado}°C equivalen a: ${gradoFahrenheit}°F`);
alert(`Los grados centígrados: ${gradoCentigrado}°C equivalen a: ${gradoFahrenheit}°F`);
