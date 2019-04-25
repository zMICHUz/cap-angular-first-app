import { Component, Input } from '@angular/core';

import Character from '../../shared/character.model';

@Component({
  selector: 'cap-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {
  @Input() character: Character;
} 