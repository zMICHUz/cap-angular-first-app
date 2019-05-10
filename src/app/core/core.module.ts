import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from './characters.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CharactersService, LoggerService]
})
export class CoreModule { }