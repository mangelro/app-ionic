import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista-model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista:Lista;
  nombreItem:string;

  constructor(public deseosService: DeseosService, 
    private _route: ActivatedRoute) {}

  ngOnInit() {
    const listaId=this._route.snapshot.params["listaId"];
    this.lista= this.deseosService.getListaPorId(listaId);
  }

  agregarItem(){

    if(this.nombreItem.length===0){
      return;
    }
    const nuevoItem= new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.nombreItem='';
    this.deseosService.guardarStorage();

  }
  cambioCheck(item:ListaItem){
    
    const pendientes= this.lista.items.filter(l=> !l.compleado).length;

    this.lista.completada=pendientes==0;
    if (pendientes==0)
    {
      this.lista.terminadaEn=new Date();
    }
    else
    {
      this.lista.terminadaEn=null;
    }

    this.deseosService.guardarStorage();
  }

  borrarItem(index:number){
    console.log(index);

    this.lista.items.splice(index,1);
    this.deseosService.guardarStorage();
  }


}
