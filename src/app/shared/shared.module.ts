import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title/title.component';
import { MultiplicationPipe } from './multiplication.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent, MultiplicationPipe],
  exports: [TitleComponent, MultiplicationPipe]
})
export class SharedModule { }