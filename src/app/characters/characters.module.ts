import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CharacterListComponent],
  exports: [CharacterListComponent]
})
export class CharactersModule { }