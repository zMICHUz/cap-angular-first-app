import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CharactersService } from '../../core/characters.service';

import Character from '../../shared/character.model';

@Component({
  selector: 'cap-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: Character;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.charactersService.getCharacter(id)
      .subscribe(character => this.character = character);
  }

  goBack() {
    this.location.back()
  }
} 