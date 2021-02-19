import { Component } from '@angular/core';
import { Router, ɵangular_packages_router_router_b } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista-model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public deseosService: DeseosService, 
    private _router: Router, 
    private _alertController: AlertController) {
  }

  async aggregarLista() {

    const alert = await this._alertController.create({
      header: 'Nueva lista',
      inputs:[
        {
          name: 'titulo',
          type :'text',
          placeholder:'Nombre lista',
        }],
      buttons:[
        {
          text:'Cancelar',
          role:'cancel',
          handler: ()=> console.log('cancelado'),
        },
        {
          text:'Crear',
          handler:(data)=>{
            if (data.titulo.length>0)
            {
             let nuevaLista= this.deseosService.crearLista(data.titulo);
             //this._router.navigateByUrl(`/tabs/tab1/agregar/${nuevaLista.id}`);
             this._router.navigate(['/tabs/tab1/agregar',nuevaLista.id]);
            }
          }
        }
      ]
    });

    alert.present();

    //this._router.navigateByUrl('/tabs/tab1/agregar');
  }

  listaSeleccionada(lista:Lista){

    this._router.navigate(['/tabs/tab1/agregar',lista.id]);

  }
}
