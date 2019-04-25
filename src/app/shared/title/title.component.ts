import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cap-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {

  @Input() title: string

  constructor() { }

  ngOnInit() {
  }

}