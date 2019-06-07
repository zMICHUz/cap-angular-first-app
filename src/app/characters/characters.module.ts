import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { SharedModule } from '../shared/shared.module'

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    AngularFirestoreModule,
    SharedModule
  ],
  declarations: [CharacterListComponent, CharacterDetailComponent],
  exports: [CharacterListComponent, CharacterDetailComponent]
})
export class CharactersModule { }