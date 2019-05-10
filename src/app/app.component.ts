import { Component } from '@angular/core';

import { CharactersService } from './core/characters.service';
import { LoggerService } from './core/logger.service';

import Character from './shared/character.model';
import mockCharacters from './shared/mock-characters';

@Component({
  selector: 'cap-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'My Fisrt Angular App';
  characters: Array<Character>;
  selectedCharacter: Character;

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

  selectCharacter($character: Character) {
    this.loggerService.log(`APP CHARACTER SELECTED ${$character.name}`);

    if(this.selectedCharacter === $character){
      this.selectedCharacter = undefined;
    } else {
      this.selectedCharacter = $character;
    }
  } 
}
