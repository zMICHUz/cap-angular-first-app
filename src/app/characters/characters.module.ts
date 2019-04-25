import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CharacterListComponent, CharacterDetailComponent],
  exports: [CharacterListComponent, CharacterDetailComponent]
})
export class CharactersModule { }