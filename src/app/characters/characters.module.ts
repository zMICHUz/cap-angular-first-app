import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CharacterListComponent],
  exports: [CharacterListComponent]
})
export class CharactersModule { }