import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { CharactersService } from '../../core/characters.service';

import Character from '../../shared/character.model';

@Component({
  selector: 'cap-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: Character;
  id: number;
  characterForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.charactersService.getCharacter(this.id)
      .subscribe(character => {
        this.character = character

        this.characterForm = this.fb.group({
          name: [this.character.name, Validators.required],
          age: [this.character.age, Validators.required],
          actor: [this.character.actor, Validators.required],
          died: [this.character.died, Validators.required],
        });
      });
  }

  goBack() {
    this.location.back()
  }

  onSubmit() {
    console.warn(this.characterForm.);
  }
} 