let colaListo = new Cola();
let aux = 0;
let llegada = 0;

function agregar(algoritmo,prioridad){
    letra = String.fromCharCode(65+aux);
    aux++;    
    rafaga = Math.floor(Math.random()*10)+1;
    colaListo.insertar(letra,rafaga,llegada,algoritmo,prioridad);
    llegada += Math.floor(Math.random()*3);     
    imprimirListos();
}

function mostrarAlgoritmo(){
    colaListo.atender();
    //imprimirTabla();
}

function mostrarDiagrama(){
    crearDiagrama();
}

