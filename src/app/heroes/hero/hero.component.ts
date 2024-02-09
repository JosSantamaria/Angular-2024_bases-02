import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'ironman'
  public age:number = 45

  //METODOS getter y setter

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  //Los Metodos deben de ser llamados con () para retornar su valor
  public getHeroDescription():string{
    return `${this.name} - ${this.age}`  }

changeHeroName():void{
//TODO: Implementar metodo en el template
  this.name = 'Spiderman'
}

changeHeroAge():void{
  //TODO: Implementar metodo en el template
  this.age = 23
}

resetForm():void{
  //*Boton de reinicio de valores default
  this.name = 'ironman';
  this.age = 45;

}

 }
