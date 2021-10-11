function imprimirListos(){
    let tabla = document.getElementById("listoB");
    tabla.innerHTML = "";
    let actual = colaListo.head;
    let usuario = ""; 
    while(actual){
        tabla.innerHTML += "<td>"+actual.value+"</td>"+"<td>"+actual.procesos+"</td>"+"<td>"+actual.llegada+"</td>";
        actual = actual.next;
    }    
}

function imprimirTabla(){
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
        "<td>"+actual.espera+"</td>";
        //Fin
        actual = actual.next;
    }
}

function crearDiagrama(){
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

