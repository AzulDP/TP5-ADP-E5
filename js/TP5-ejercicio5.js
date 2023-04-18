/* Cronómetro - Dificultad:  🟢🟡

5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
*/
// let botonStart = document.querySelector("")
let cronometro = document.getElementById("cronometro");
let pausa = true;
let sec = 0;
let min = 0;
let hrs = 0;
let t;

function mostrar (){
   sec++;
   if (sec <= 60){
    if (sec < 10){
        sec = "0" + sec;
    } else{
        sec= 0;
        min++;
    }
    if(min <=60){
        if (min < 10){
            min = "0" + min;
        } else{
            min =0;
            hrs++;
        }
    }
    if (hrs < 99){
        if (hrs < 10){
        hrs = "0" + hrs;
    } else {
        hrs = 0;
    }
}
}
document.getElementById("cronometro").innerHTML = `${hrs} : ${min} : ${sec}`;
}

// function add(){
//     marker();
//    document.getElementById("cronometro").innerHTML = (hrs > 9 ? hrs : "0" + hrs) 
// + ":" + (minmin > 9 ?min : "0" +min) + ":" + (sec > 9 ? sec : "0" + sec);
//    timer();
// }
// function timer (){
//     t = setTimeout(add,1000);
// }



function start (){
    console.log("Desde Iniciar");
    console.log(btnIniciar.className);
    // const idInterval = setInterval(cronometro, 1000);
    start.onclick = timer;
    document.getElementById("cronometro").innerHTML = `${hrs}:${min}:${sec}`;
}

function stop(){ 
    stop.onclick = function (){
    clearTimeout(t);
    document.getElementById("cronometro").innerHTML = `${hrs}:${min}:${sec}`;
}
}

function pause(){
    pausar.onclick = function() {
      document.getElementById("cronometro").innerHTML = `${hrs}:${min}:${sec}`;
        sec = 0; min = 0; hrs = 0;
    }
}


