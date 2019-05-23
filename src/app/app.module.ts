import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CharactersModule } from './characters/characters.module';
import { LoggerService } from './core/logger.service';

import { AppComponent } from './app.component';

@Injectable()
class MyErrorHandler implements ErrorHandler {
  constructor(private logger: LoggerService) {}
  
  handleError(error) {
    console.log('ERROR HANDLER!');
    this.logger.log(error)
  }
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CharactersModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  providers: [{provide: ErrorHandler, useClass: MyErrorHandler}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
