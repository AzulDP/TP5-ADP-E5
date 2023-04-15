/* Cronómetro - Dificultad:  🟢🟡

5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
*/
// let botonStart = document.querySelector("")

function start (){
    console.log("Desde Iniciar");
    let btnIniciar = document.getElementById("Iniciar");
    console.log(btnIniciar.className);

}
let contador =1;
function cronometro(){
    document.write(`<p>Prueba de set interval N=${contador}</p>`)
    contador++;
}

const idInterval = setInterval(cronometro, 1000);
