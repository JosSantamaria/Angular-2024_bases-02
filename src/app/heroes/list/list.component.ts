import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames:string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public deletedHero?:string; //Declarado en el scpope principal

  removeLastHero():void{
    //! Retornamos el ultimo valor borrado con pop() y
    //!lo asignamos a la variable que se
    //!declaro publicamente en el scope de la clase del componente.
    this.deletedHero = this.heroesNames.pop();

  }

}
