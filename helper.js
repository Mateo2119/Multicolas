function imprimirListos(){
    let tabla = document.getElementById("listoB");
    tabla.innerHTML = "";
    let actual = colaListo.head;
    let usuario = ""; 
    while(actual){
        tabla.innerHTML += "<td>"+actual.value+"</td>"+
        "<td>"+actual.procesos+"</td>"+
        "<td>"+actual.llegada+"</td>"+
        "<td>"+actual.algoritmo+"</td>"+
        "<td>"+actual.prioridad+"</td>";
        actual = actual.next;
    }    
}

var t_final = 0;
function imprimirTabla(Nodo){
    let rafaga = Nodo.procesos;
    if(Nodo.prioridad==1 && rafaga>quantum){
        console.log(rafaga+" Disminuyea: ");
        rafaga = quantum;
        console.log("a esto: "+rafaga);
    }
    t_final += rafaga;    
    let t_comienzo = t_final - rafaga;
    let retorno = t_final - Nodo.llegada;
    let espera =+ Math.abs(retorno - rafaga);

    let tabla = document.getElementById("tabla");    
    let tblBody = document.getElementById("tbody");
    tblBody.innerHTML += 
        "<td>"+Nodo.value+"</td>"+
        "<td>"+rafaga+"</td>"+
        "<td>"+Nodo.llegada+"</td>"+
        "<td>"+t_comienzo+"</td>"+
        "<td>"+t_final+"</td>"+
        "<td>"+retorno+"</td>"+
        "<td>"+espera+"</td>"+
        "<td>"+Nodo.algoritmo+"</td>";
    crearDiagrama(Nodo.value,Nodo.llegada,t_comienzo,t_final);
}

function crearDiagrama(nombre,llegada,comienzo,final){
    let head = document.getElementById("headD");
    let body = document.getElementById("bodyD");
    let info;
    info = "<td>"+nombre+"</td>";
    for(let i=0;i<llegada;i++){
        info += "<td style='background-color: rgb(0, 0, 0);'></td>"; //Tiempo sin nada
    }
    for(let i=llegada;i<comienzo;i++){
        info += "<td style='background-color: rgb(62, 84, 210);'></td>"; //Tiempo de comienzo
    }
    for(let i=comienzo;i<final;i++){
        info += "<td style='background-color: rgb(255, 0, 0);'></td>"; //Tiempo de ejecucion
    }
    body.innerHTML += info;
}
    
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

