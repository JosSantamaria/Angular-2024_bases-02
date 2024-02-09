import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main.page.component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { DbzAddCharacterComponent } from './components/dbz-add-character/dbz-add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    DbzAddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MainPageComponent]
})
export class DbzModule { }
