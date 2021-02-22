import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista-model';

@Pipe({
  name: 'filtrocompletado',
  pure : false,

})
export class FiltrocompletadoPipe implements PipeTransform {

  transform(value: Lista[],completado:boolean=true): Lista[] {
    return value.filter(l=> l.completada===completado);
  }

}
