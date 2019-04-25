import { Component } from '@angular/core';

@Component({
  selector: 'cap-app',
  template: `<h1>Hello {{name}}!</h1>`
})
export class AppComponent  {
  name = 'Capgemini';
}
