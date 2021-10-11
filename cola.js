var final = 0;

class Nodo{
    constructor(value,procesos,llegada,algoritmo,prioridad,comienzo,final,retorno,espera){
    this.value = value;
    this.procesos = procesos;
    this.llegada = llegada;
    this.algoritmo = algoritmo;
    this.prioridad = prioridad;
    this.comienzo = comienzo;
    this.final = final;
    this.retorno = retorno;
    this.espera = espera;
    this.next = null;
    }
}

class Cola{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.restantes = 5;      
    };

    insertar(value,procesos,llegada,algoritmo,prioridad){
        final += procesos;
        let comienzo = final-procesos;
        let retorno = final - llegada;
        let espera = retorno - procesos;
        const nodo = new Nodo(value, procesos,llegada,algoritmo,prioridad,comienzo,final,retorno,espera);

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

    async atenderRoundRobin(){
        if(!this.isEmpty()){
            let actual = this.head;
            if (actual.procesos != 0) { //SI SE ACABAN LOS PROCESOS ELIMINA EL NODO 
                if (this.restantes != 0) {//Si no ha agotado las 5 transacciones 
                    await delay(1);
                    actual.procesos--;
                    this.restantes--;                
                    this.atenderRoundRobin();
                    console.log("procesos: " + actual.procesos);
                    imprimirListos();
                }else{ //Si se supera el limite de transacciones
                    console.log("no se puede atender más");
                    this.insertar(actual.value,actual.procesos,actual.llegada,actual.algoritmo,actual.prioridad);
                    this.eliminar();
                    this.restantes = 5;              
                    this.atenderRoundRobin();
                }
            } else { //ATIENDE AL SIGUIENTE
                this.restantes = 5;
                this.eliminar();
                this.atenderRoundRobin();
            }
        }        
    }
    
    async atenderFCFS(){
        let actual = this.head;
        if(actual.procesos>0){
            await delay(1);
            actual.procesos--;
            this.atenderFCFS();
            console.log("procesos: " + actual.procesos);
            imprimirListos();
        }else{
            this.eliminar();
            this.atenderFCFS();
        }
    }

    async atenderSJF(){
        let actual = this.head;
        if(actual.procesos>0){
            await delay(1);
            actual.procesos--;
            this.atenderSJF();
            console.log("procesos: " + actual.procesos);
            imprimirListos();
        }else{
            this.eliminar();
            this.atenderSJF();
        }
    }

    atender(){
        imprimirTabla();
        if(this.length>0){
            let actual = this.head;
            if(actual.prioridad==1){
                alert("Atendiendo Round Robin");
                this.atenderRoundRobin();
            }
            if(actual.prioridad==2){
                alert("Atendiendo SJF");
                this.atenderSJF();
            }
            if(actual.prioridad==3){
                alert("Atendiendo FCFS");
                this.atenderFCFS();
            }
        }else{
            alert("Vacia webon");
        }       
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