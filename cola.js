class Nodo{
    constructor(value,procesos,llegada,comienzo,final,retorno,espera){
    this.value = value;
    this.procesos = procesos;
    this.llegada = llegada;
    this.comienzo = comienzo;
    this.final = final;
    this.retorno = retorno;
    this.espera = espera;
    this.next = null;
    }
}

var final = 0;
class Cola{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.restantes = 5;      
    };

    insertar(value,procesos,llegada){
        final += procesos;
        let comienzo = final-procesos;
        let retorno = final - llegada;
        let espera = retorno - procesos;
        const nodo = new Nodo(value, procesos,llegada,comienzo,final,retorno,espera);

        if(this.head){
            this.tail.next = nodo;
            this.tail = nodo;
        }else{
            this.head = nodo;
            this.tail = nodo;
        }
        this.length++;
    }

    eliminar(){
        const actual = this.head;
        this.head = this.head.next;
        this.length--;
        return actual.value;
    }

    mostrar(){
        let actual = this.head;
        while(actual){
            console.log("Nombre: "+actual.value+" Procesos: "+actual.procesos);
            actual = actual.next;
        }
    }

    isEmpty(){
        return this.length === 0;
    }

    getSize(){
        return this.length;
    }
}