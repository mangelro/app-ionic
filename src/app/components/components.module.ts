import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports:[
    ListasComponent
  ],
  declarations: [ListasComponent]

})
export class ComponentsModule { }
