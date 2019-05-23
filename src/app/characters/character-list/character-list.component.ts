import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CharactersService } from '../../core/characters.service';
import { LoggerService } from '../../core/logger.service';

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

  constructor(
    private charactersService: CharactersService,
    private loggerService: LoggerService) {}
  
  ngOnInit() {
    this.loggerService.log('APP INIT');

    this.charactersService.getCharacters().subscribe(characters => {
      this.loggerService.log('APP CHARACTERS RETRIEVED');

      this.characters = characters
    });
  }

  selectCharacter(character: Character) {
    this.selected.emit(character);
  } 
}