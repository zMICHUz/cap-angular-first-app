import { Component, Input, Output, EventEmitter } from '@angular/core';

import Character from '../../shared/character.model';

@Component({
  selector: 'cap-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  @Input() characters: Array<Character>;
  @Input() selectedCharacter: Character;
  
  @Output() selected: EventEmitter<Character> = new EventEmitter<Character>();

  selectCharacter(character: Character) {
    this.selected.emit(character);
  } 
}