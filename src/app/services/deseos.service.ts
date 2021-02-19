import { Injectable } from '@angular/core';
import { Lista } from '../models/lista-model';

@Injectable({
  providedIn: 'root',
})
export class DeseosService {
  private _listas: Lista[] = [];

  constructor() {
/*
    const lista1 = new Lista('recolectar piedras del infinito');
    const lista2 = new Lista('Héroes a desaparecer');
    this._listas.push(lista1, lista2);
*/
    this.cargarStorage();    
  }

  get Listas() {
    return this._listas;
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this._listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista;
  }

  getListaPorId(id:string|number)
  {
    id=Number(id);
    return this._listas.find((lista)=>  lista.id==id);

  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.Listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this._listas = JSON.parse(localStorage.getItem('data'));
    }
  }
}
