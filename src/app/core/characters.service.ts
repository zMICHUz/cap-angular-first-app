import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import Character from '../shared/character.model';
import mockCharacters from '../shared/mock-characters';

@Injectable()
export class CharactersService {

  getCharacters(): Observable<Character[]> {
    const characters = mockCharacters;

    return of(characters);
  }

}