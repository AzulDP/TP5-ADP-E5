/* Cronómetro - Dificultad:  🟢🟡

5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
*/
// let botonStart = document.querySelector("")
let cronometro = document.getElementById("cronometro");
let btnIniciar = document.getElementById("iniciar");
let btnPausar = document.getElementById("pausar");
let btnParar = document.getElementById("parar");
let sec = 0;
let min = 0;
let hrs = 0;
let t;

function marker (){
   sec++;
   if (sec <= 60){
    sec= 0;
    min++;
    if(min <=60){
        min =0;
        hrs++;
    }
}
}

function add(){
    marker();
    cronometro.innerHTML = (hrs > 9 ? hrs : "0" + hrs) 
+ ":" + (min > 9 ? min : "0" + min)
   + ":" + (sec > 9 ? sec : "0" + sec);
   timer();
}
function timer (){
    t = setTimeout(add,1000);
}



function start (){
    console.log("Desde Iniciar");
    console.log(btnIniciar.className);
    start.onclick = timer;
}

function stop(){ 
    stop.onclick = function (){
    clearTimeout(t);
}
}

function pause(){
    pausar.onclick = function() {
        h1.innerHTML = "00:00:00";
        seconds = 0; minutes = 0; hours = 0;
    }
}
// }
// let contador =1;
// function cronometro(){
//     document.write(`<p>Prueba de set interval N=${contador}</p>`)
//     contador++;
// }

// const idInterval = setInterval(cronometro, 1000);
