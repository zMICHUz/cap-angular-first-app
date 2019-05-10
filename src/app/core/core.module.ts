import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from './characters.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CharactersService]
})
export class CoreModule { }