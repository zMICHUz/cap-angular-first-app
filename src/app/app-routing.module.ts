import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CharacterListComponent }   from './characters/character-list/character-list.component';
import { CharacterDetailComponent }   from './characters/character-detail/character-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterDetailComponent },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: false}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
