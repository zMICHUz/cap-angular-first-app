import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { CharactersService } from './characters.service';
import { LoggerService } from './logger.service';
import { HeaderInterceptor } from './header.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [CharactersService, LoggerService, { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },],
  exports: [HttpClientModule]
})
export class CoreModule { }