import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';

import { CharactersService } from './characters.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [CharactersService, LoggerService],
  exports: [HttpClientModule]
})
export class CoreModule { }