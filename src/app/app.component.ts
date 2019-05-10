import { Component } from '@angular/core';

import { CharactersService } from './core/characters.service';

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

  constructor(private charactersService: CharactersService) {}
  
  ngOnInit() {
    this.charactersService.getCharacters().subscribe(characters => {
      this.characters = characters
    });
  }

  selectCharacter($character: Character) {
    if(this.selectedCharacter === $character){
      this.selectedCharacter = undefined;
    } else {
      this.selectedCharacter = $character;
    }
  } 
}
