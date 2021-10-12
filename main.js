let colaListo = new Cola();
let aux = 0;
let llegada = 0;
var quantum = 5;

function agregar(algoritmo,prioridad){
    letra = String.fromCharCode(65+aux);
    aux++;    
    rafaga = Math.floor(Math.random()*9)+1;
    colaListo.insertar(letra,rafaga,llegada,algoritmo,prioridad);
    llegada += Math.floor(Math.random()*2);     
    imprimirListos();
}

function mostrarAlgoritmo(){
    colaListo.atender();
    //imprimirTabla();
}

function mostrarDiagrama(){
    crearDiagrama2();
}

