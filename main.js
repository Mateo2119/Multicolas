let colaListo = new Cola();
let aux = 0;
let llegada = 0;



function agregar1(){
    letra = String.fromCharCode(65+aux);
    aux++;    
    rafaga = Math.floor(Math.random()*10)+1;
    colaListo.insertar(letra,rafaga,llegada,"R.Robin",1);
    llegada += Math.floor(Math.random()*3);     
    imprimirListos();
}

function agregar2(){
    letra = String.fromCharCode(65+aux);
    aux++;    
    rafaga = Math.floor(Math.random()*10)+1;
    colaListo.insertar(letra,rafaga,llegada,"SJF",2);
    llegada += Math.floor(Math.random()*3);  
    imprimirListos();
}

function agregar3(){
    letra = String.fromCharCode(65+aux);
    aux++;    
    rafaga = Math.floor(Math.random()*10)+1;
    colaListo.insertar(letra,rafaga,llegada,"FCFS",3);
    llegada += Math.floor(Math.random()*3);     
    imprimirListos();
}

function mostrarAlgoritmo(){
    imprimirTabla();
}

function mostrarDiagrama(){
    crearDiagrama();
}

