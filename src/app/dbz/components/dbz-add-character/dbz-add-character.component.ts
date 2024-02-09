import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './dbz-add-character.component.html',
  styles: ``
})
export class DbzAddCharacterComponent {

//Creamos una propiedad de tipo EventEmmitter para poder asignar el valor de la propiedad original que se necesita emitir al padre.
@Output()
 public emitNewCharacter:EventEmitter<Character> = new EventEmitter();

 public character: Character = {
  name:'',
  power:0
 }

emitCharacter():void {

if(this.character.name.length === 0) return;

    this.emitNewCharacter.emit(this.character);
    this.character = {name: '',power: 0};

}

}





// ? ---------------- NOTAS --------------------

// // export class DbzAddCharacterComponent {

// //   //Creamos una propiedad de tipo EventEmmitter para poder asignar el valor de la propiedad original que se necesita emitir al padre.
// //   @Output()
// //    public onNewCharacter:EventEmitter<Character> = new EventEmitter();

// //   //? Declaramos un objeto vacio para poder asignar los datos desde el template
// //   public character: Character = {
// //     name:'',
// //     power:0
// //   }

// //   emitCharacter():void {
// //     //! AQUI NO OCUPAMOS asignar los values con el OBJETO character, ya que estan enlazados con el ngModel(template)
// //     //Podemos depurar el objeto con el clg()
// //     // // console.log('desde AddCharacter:');
// //     // // console.log(this.character);

// //     //! Validamos que no sea vacio ''
// //   if(this.character.name.length === 0) return;
// //       //* Posteriormente lo podemos emitir
// //         this.onNewCharacter.emit(this.character);

// //   //!Limpiamos el objeto del evento (ngSubmit) del formulario
// //   this.character = {name: '',power: 0};
// //         // ! IMPORTANTE: NO definir los values accediendo al objeto.propiedad.
// //         // ! Ya que sobreEscribe la definicion del modelo al enviar el objeto, entonces parecera vacio.
// //         // this.character.name = '';
// //         // this.character.power = 0;
// //   }

// //   }
