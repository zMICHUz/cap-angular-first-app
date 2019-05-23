import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { CharactersService } from '../../core/characters.service';
import { LoggerService } from '../../core/logger.service';

import Character from '../../shared/character.model';

@Component({
  selector: 'cap-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  characters: Array<Character>;
  selectedCharacter: Character;
  
  constructor(
    private charactersService: CharactersService,
    private loggerService: LoggerService,
    private router: Router,) {}
  
  ngOnInit() {
    this.loggerService.log('APP INIT');

    this.charactersService.getCharacters().subscribe(characters => {
      this.loggerService.log('APP CHARACTERS RETRIEVED');

      this.characters = characters
    });
  }

  selectCharacter(characterId: number) {
    this.router.navigate([ '/characters', characterId ])
  } 
}