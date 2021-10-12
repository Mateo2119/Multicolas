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
        this.numRR = 0;
        this.numSJF = 0;
        this.numFCFS = 0;      
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
        if(prioridad==1){
            this.numRR++;
        }else if(prioridad==2){
            this.numSJF++;
        }
        else if(prioridad==3){
            this.numFCFS++;
        }
        
        this.length++;
    }

    eliminar(){
        const actual = this.head;
        if(actual.prioridad==1){
            this.numRR--;
        }else if(actual.prioridad==2){
            this.numSJF--;
        }
        else if(actual.prioridad==3){
            this.numFCFS--;
        }
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
                    //console.log("procesos: " + actual.procesos);
                    imprimirListos();
                }else{ //Si se supera el limite de transacciones
                    //console.log("no se puede atender más");
                    this.insertar(actual.value,actual.procesos,actual.llegada,actual.algoritmo,actual.prioridad);
                    this.eliminar();
                    this.restantes = 5;              
                    this.atender();
                }
            } else { //ATIENDE AL SIGUIENTE
                this.restantes = 5;
                this.eliminar();
                this.atender();
            }
        }        
    }

     async atenderSJF(){
        let actual = this.head;
        if(actual.procesos!=0){
            await delay(1);
            actual.procesos--;
            this.atenderSJF();
            //console.log("procesos: " + actual.procesos);
            imprimirListos();
        }else{
            this.eliminar();            
            this.atender();
        }
    }
    
    async atenderFCFS(){
        let actual = this.head;
        if(actual.procesos!=0){
            await delay(1);
            actual.procesos--;
            this.atenderFCFS();
            //console.log("procesos: " + actual.procesos);
            imprimirListos();
        }else{
            this.eliminar();
            this.atender();
        }
    }

    async atender(){        
        let actual = this.head;
        imprimirListos();
        await delay(1);
        console.log("Hay: "+this.numRR+" Round Robin");
        console.log("Hay: "+this.numSJF+" SJF");
        console.log("Hay: "+this.numFCFS+" FCFS");
        if(this.numRR != 0){ //SI HAY RR
            if(actual.prioridad == 1){
                imprimirTabla(actual);
                crearDiagrama(actual);
                this.atenderRoundRobin();                
            }else{
                this.insertar(actual.value,actual.procesos,actual.llegada,actual.algoritmo,actual.prioridad);
                this.eliminar();
                this.atender();         
            }
        }else if(this.numSJF != 0){ //SI HAY SJF
            if(actual.prioridad==2){
                imprimirTabla(actual);
                crearDiagrama(actual);
                this.atenderSJF();
            }else{
                this.insertar(actual.value,actual.procesos,actual.llegada,actual.algoritmo,actual.prioridad);
                this.eliminar();
                this.atender(); 
            }
        }else if(this.numFCFS != 0){ // SI HAY FCFS
            if(actual.prioridad==3){
                imprimirTabla(actual);
                crearDiagrama(actual);
                this.atenderFCFS();
            }else{
                console.log("prioridad desonocida");
            }          
        }else{
            alert("No hay más para atender");
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