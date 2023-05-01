import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent   {

  heroes: string[] = ['spiderman','hulkman','thor','Ironman','Capitan America'];
  heroeborrado:string = '';

  borrarHeroe() {
    this.heroeborrado = this.heroes.shift() || '';
     
  }
  
  
}
