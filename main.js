let colaListo = new Cola();
let aux = 0;
let llegada = 0;

async function iniciar(){
    let rafaga = null;
    let letra = null;  
    /*
    colaListo.insertar("A",8,0);
    colaListo.insertar("B",4,1);
    colaListo.insertar("C",9,2);
    colaListo.insertar("D",5,3);
    colaListo.insertar("E",2,4);
    */

   for(let i=0;i<5;i++){
        letra = String.fromCharCode(65+aux);   
        rafaga = Math.floor(Math.random()*10)+1;                    
        colaListo.insertar(letra,rafaga,llegada);
        llegada += Math.floor(Math.random()*3);
        aux++;
        imprimirListos();
        imprimirTabla();
        crearDiagrama();
        await delay(1); 
    }
    //imprimirListos();   
}

function tabla(){    
    imprimirTabla();
}


function diagrama(){
    crearDiagrama();
}
