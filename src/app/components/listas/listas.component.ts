import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista-model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  listas:Lista[];
  
  @ViewChild(IonList) lista:IonList;

  @Input() terminados=true;

  constructor(public deseosService: DeseosService
    ,private _router: Router
    ,private _alertController: AlertController ) { }

  ngOnInit() {}

  listaSeleccionada(lista:Lista){

    if (this.terminados)
    this._router.navigate(['/tabs/tab2/agregar',lista.id]);
    else
    this._router.navigate(['/tabs/tab1/agregar',lista.id]);

  }

  borrarItem(id:number){
    this.deseosService.borrarLista(id);
    
  }

  async editarItem(id:number){
    
    const lista=this.deseosService.getListaPorId(id);

    const alert = await this._alertController.create({
      header: 'Nueva lista',
      inputs:[
        {
          name: 'titulo',
          type :'text',
          placeholder:'Nombre lista',
          value:lista.titulo,
        }],
      buttons:[
        {
          text:'Cancelar',
          role:'cancel',
          handler: ()=> this.lista.closeSlidingItems(),
        },
        {
          text:'Modificar',
          handler:(data)=>{
            if (data.titulo.length>0)
            {
             let nuevaLista= this.deseosService.modificarTitulo(id,data.titulo);
             if (this.terminados)
              this._router.navigateByUrl('/tabs/tab2');
             else
              this._router.navigateByUrl('/tabs/tab1');
            }
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
    



    
  }


}
