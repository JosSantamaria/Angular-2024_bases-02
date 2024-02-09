import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
public characters:Character[] = [{
  id:uuid(),
  name:'Krilin',
  power:1000
},
{
  id:uuid(),
  name:'Goku',
  power:9500
},
{
  id:uuid(),
  name:'Vegetta',
  power:7500
}];

receiveAddNewCharacter( character: Character ):void{
const newCharacter: Character = { id: uuid(), ...character};
// // console.log(newCharacter);
this.characters.push(newCharacter);

}

receiveDeleteCharacterId( id:string):void{
  console.log('Desde DbzService',id)
  this.characters = this.characters.filter(character => character.id !== id)


}

}














// ? ------------------ NOTAS--------------------------

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class DbzService {
// //   //! En este CASO tenemos acceso a la propiedad character desde el HTML de MainPageComponent
// // //* ! Es decir, podemos pasar la info character directamente en el template, donde se encuentra
// // //* ! el SELECTOR del componenteHijo :: DbzList : <dbz-list [propiedadHijo]="characters" ></dbz-list>

// // public characters:Character[] = [{
// //   id:uuid(),
// //   name:'Krilin',
// //   power:1000
// // },
// // {
// //   id:uuid(),
// //   name:'Goku',
// //   power:9500
// // },
// // {
// //   id:uuid(),
// //   name:'Vegetta',
// //   power:7500
// // }];

// // //! Recibimos el evento del EventEmitter con el Objeto, desde el HIJO.
// // //* Llamamos a la funcion y pasamos el evento con receiveOnNewCharacter($event)

// // receiveAddNewCharacter( character: Character ):void{
// //   //creamos character con su uuid, usando spread para expandir el objeto y agregar el uuid()
// // const newCharacter: Character = { id: uuid(), ...character};
// // //? Podemos depurar el objeto recibido
// // // console.log(newCharacter);
// // //* Agregamos el personaje al final del arreglo de characters
// // //

// // this.characters.push(newCharacter);

// // //tambien se piede pasar como objeto:
// // // { name:character.name,
// // //   power:character.power
// // // }
// // }

// // // * Realizamos una funcion para eliminar los objetos segun su indice
// // // receiveDeleteCharacterIndex(i:number):void{
// // receiveDeleteCharacterId( id: string):void{
// //   //Depuramos el indice obtenido por el evento
// //   console.log('Recibido EN el DbzService')
// //   console.log(id)
// //   //Eliminamos el character por su indice del array.
// //   // this.characters.splice(i,1); //comentamos,ahora es por ID
// //   this.characters = this.characters.filter(character => character.id !== id)

// // }

// // }
