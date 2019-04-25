import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { CharactersModule } from './characters/characters.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SharedModule, CharactersModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
