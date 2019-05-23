import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { LoggerService } from './logger.service';

import Character from '../shared/character.model';
import mockCharacters from '../shared/mock-characters';

@Injectable()
export class CharactersService {

  constructor(private loggerService: LoggerService) {}

  getCharacters(): Observable<Character[]> {
    const characters = mockCharacters;

    this.loggerService.log('CHARACTERS SERVICE GETTING CHARACTERS');

    return of(characters);
  }

  getCharacter(id: number): Observable<Character> {
    const character = mockCharacters[id];

    this.loggerService.log(`CHARACTERS SERVICE GETTING CHARACTER ${id}`);

    return of(character)
  }

}