import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CharacterListComponent }   from './characters/character-list/character-list.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}