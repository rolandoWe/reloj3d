
console.log('reloj')

let Dia=document.querySelector('.dia');
let am_pm=document.querySelector('.am_pm');
let Segundo=document.querySelector('.seg');
let Minuto=document.querySelector('.minuto');

let Hora=document.querySelector('.hora');
let Mes=document.querySelector('.mes');
let Dia_anio=document.querySelector('.dia_anio');
let Fecha=document.querySelector('.fecha');


function reloj(){
    let dato=new Date();

    let hora=dato.getHours();
    let minuto=dato.getMinutes();
    let segundo=dato.getSeconds();
    let amPm='';

    let dia=dato.getDay();
    let mes=dato.getMonth();
    let fechaDia=dato.getDate()
    let anio=dato.getFullYear();

    let MesAct=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic",];
    let meses=MesAct[mes]

        let dias=["Dom","Lun","Mar","Mie","Jue","Vie","Sab"]
    let diaHoy=dias[dia];

    if(hora>12){
        hora=hora-12;
        amPm="PM"
    }else{
        hora=hora;
        amPm="AM";
    }
    if(segundo<10){
        segundo="0"+segundo;
    }else{
        segundo=segundo
    }
    if(minuto<10){
        minuto="0"+minuto
    }else{
        minuto=minuto
    }

    Hora.innerHTML=`${hora}:${minuto}`;
    Segundo.innerHTML=segundo;
    Mes.innerHTML=meses;
    Dia.innerHTML=diaHoy;
    Fecha.innerHTML=fechaDia;
    Dia_anio.innerHTML=anio;
    am_pm.innerHTML=amPm
}
reloj()
setInterval(reloj,1000)