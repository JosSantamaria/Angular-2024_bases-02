import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styles: ``
})
export class DbzListComponent {

  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power:10
  }];

  @Output()
  public emitDeleteCharacterId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterId(id?:string):void{
      if(!id) return;
      this.emitDeleteCharacterId.emit(id);
    }
}



//? -------------------- NOTAS --------------------
// // export class DbzListComponent {
// //   //? creamos el objeto que emitiremos para su eliminacion
// //   // @Output()
// //   // deleteCharacterIndex = new EventEmitter<number>();
// //   @Output()
// //   public emitDeleteCharacterId:EventEmitter<string> = new EventEmitter();

// //     //*Para recibir una propiedad desde fuere ponemos el decorador @Input()
// //     //!Decimos que el Hijo recibe del Padre:MainPageComponent y el Padre Envia al HIJO:DbzListComponent

// //     @Input()
// //     public characterList: Character[] = [{
// //         name:'Trunks',
// //         power:10
// //       }];

// //       deleteCharacterId(id?:string):void{
// //         console.log(typeof(id))
// //         //Depuramos elemeto seleccionado por su indice
// //         //console.log(id)
// //         //posteriormente lo emitimos
// //         // this.deleteCharacterIndex.emit(index);

// //         this.emitDeleteCharacterId.emit(id);
// //         console.log(typeof(id))
// //       }
// //   }
