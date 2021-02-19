import { ListaItem } from "./lista-item.model";

export class Lista
{
    id:number;
    titulo:string;
    creadaEn:Date;
    terminadaEn:Date;
    completada:boolean=false;
    items:ListaItem[];

    constructor(titulo:string){
        
        this.creadaEn=new Date();
        this.titulo=titulo;
        this.items=[];

        this.id=new Date().getTime();
    }

}