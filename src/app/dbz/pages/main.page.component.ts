import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main.page.component.html'
})

export class MainPageComponent{
//inyeccion del servicio

constructor( private dbzService:DbzService){}

//resolucion de servicios privados con getter
get characters():Character[] {
  return [...this.dbzService.characters];
}


onDeleteCharacterId( id:string):void{
  console.log('Desde MainPage',id)
  this.dbzService.receiveDeleteCharacterId(id);
}

onAddNewCharacter( character: Character):void{
this.dbzService.receiveAddNewCharacter(character);
}

}
