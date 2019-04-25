import { Component } from '@angular/core';

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
  
  ngOnInit() {
    this.characters = mockCharacters;
  }

  selectCharacter($character: Character) {
    if(this.selectedCharacter === $character){
      this.selectedCharacter = undefined;
    } else {
      this.selectedCharacter = $character;
    }
  } 
}
