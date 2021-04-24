export interface Resultado{
    fecha:number;
    estado:string; //Ganador, Perdedor, Empate
    juego:string; //Ta-Te-Ti, Piedra, papel o tijera, Ahorcado, Memotest
    uid?:string;
    uemail?:string;   
   }