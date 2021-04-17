export class Card {
    id:number;
    nombre:string;
    imagen:string;
    orden:number;

    constructor(nombre:string, imagen:string, id:number, orden:number){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.orden = orden;
    }
}
