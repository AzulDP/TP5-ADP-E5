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

function mostrar(){
    sec++;
    if (sec>60){
        if (sec < 10){
            sec = "0" +sec;
    } else{
        sec= 0;
        min++;
    }
    if(min>60){
        if (min < 10){
            min = "0" +min;
        } else{
            min =0;
            hrs++;
        }
    }
    if (hrs>24){
        if (hrs < 10){
        hrs = "0" + hrs;
    } else {
        hrs = 0;
    }
}
}
document.getElementById("cronometro").innerHTML = `${hrs} : ${min} : ${sec}`;
}

function start(){
if (pausa){
    cronometro = setInterval(mostrar, 1000);
pausa = false;
}
}

function pause(){
    clearInterval(cronometro);
    pausa = true;
}

function reset(){ 
    clearInterval(cronometro);
    pausa = true;
hrs = 0;
min = 0;
sec = 0;
document.getElementById("cronometro").innerHTML = `00: 00: 00`;
}



