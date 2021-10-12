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

/* function imprimirTabla2(){
    let tabla = document.getElementById("tabla");    
    let tblBody = document.getElementById("tbody");
    tblBody.innerHTML = "";
    var numFilas = colaListo.getSize();
    let actual = colaListo.head;

    while(actual){
        //Elementos de la tabla
        tblBody.innerHTML += 
        "<td>"+actual.value+"</td>"+
        "<td>"+actual.procesos+"</td>"+
        "<td>"+actual.llegada+"</td>"+
        "<td>"+actual.comienzo+"</td>"+
        "<td>"+actual.final+"</td>"+
        "<td>"+actual.retorno+"</td>"+
        "<td>"+actual.espera+"</td>"+
        "<td>"+actual.algoritmo+"</td>";
        //Fin
        actual = actual.next;
    }
} */
var t_final = 0;
function imprimirTabla(Nodo){
    let rafaga = Nodo.procesos;
    t_final += rafaga;
    let t_comienzo = t_final - rafaga;
    let retorno = t_final - Nodo.llegada;
    let espera = retorno - rafaga;

    let tabla = document.getElementById("tabla");    
    let tblBody = document.getElementById("tbody");
    tblBody.innerHTML += 
        "<td>"+Nodo.value+"</td>"+
        "<td>"+Nodo.procesos+"</td>"+
        "<td>"+Nodo.llegada+"</td>"+
        "<td>"+t_comienzo+"</td>"+
        "<td>"+t_final+"</td>"+
        "<td>"+retorno+"</td>"+
        "<td>"+espera+"</td>"+
        "<td>"+Nodo.algoritmo+"</td>";
    crearDiagrama(Nodo.value,Nodo.rafaga,Nodo.llegada,t_comienzo,t_final);
}

function crearDiagrama(nombre,rafaga,llegada,comienzo,final){
    let head = document.getElementById("headD");
    let body = document.getElementById("bodyD");
    let info;
    //head.innerHTML = "";
    //body.innerHTML = "";
    info = "<td>"+Nodo.value+"</td>";
    for(let i=0;i<Nodo.llegada;i++){
        info += "<td style='background-color: rgb(30, 30, 30);'></td>"; //Tiempo sin nada
    }
    for(let i=0;i<Nodo.llegada;i++){
        info += "<td style='background-color: rgb(62, 84, 210);'></td>"; //Tiempo de comienzo
    }
}

function crearDiagrama2(){
    let head = document.getElementById("headD");
    let body = document.getElementById("bodyD");
    head.innerHTML = "";
    body.innerHTML = "";
    let tiempo = "<th>Pr</th>";
    let actual = colaListo.head;
    let longitud = colaListo.tail.final;
    //CREA LA CABECERA
    for(let i=0;i<=longitud;i++){
        tiempo += "<th>"+i+"</th>";
    }
    while(actual){
        //Elementos de la tabla        
        info = "<td>"+actual.value+"</td>";
        //DEPENDE DE LA LONGITUD
        let aux2 =0;
        let aux3 =0;
        for(let i=0;i<=longitud;i++){
            if(i>=actual.llegada){
                if(i>=actual.comienzo){
                    if(i>=actual.final){
                        info += "<td style='background-color: rgb(30, 30, 30);'></td>"; //Tiempo sin nada
                    }else{
                        info += "<td style='background-color: rgb(255, 0, 0);'></td>"; //Tiempo de ejecucion
                    }                    
                }else{
                    info += "<td style='background-color: rgb(62, 84, 210);'></td>"; //Tiempo de comienzo
                }                
            }else{
                info += "<td style='background-color: rgb(30, 30, 30);'></td>"; //Tiempo sin nada
            }        
        }
        body.innerHTML += info;
        //Fin
        actual = actual.next;
    }
    head.innerHTML = tiempo;
}
    
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

