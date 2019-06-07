import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'

import { LoggerService } from './logger.service';

import Character from '../shared/character.model';

const BASE_URL = 'https://capgemini-angular.firebaseio.com';
const CHARACTERS_ENDPOINT = '/characters';
const URL_SUFIX = '.json';

@Injectable()
export class CharactersService {

  constructor(private loggerService: LoggerService, private http: HttpClient, private db: AngularFirestore) {}

  getCharacters(): Observable<Character[]> {
    // this.loggerService.log('CHARACTERS SERVICE GETTING CHARACTERS');

    // return this.http.get<Character[]>(`${BASE_URL}${CHARACTERS_ENDPOINT}${URL_SUFIX}`);
return this.db
      .collection('characters')
      .snapshotChanges()
  }

  getCharacter(id: number): Observable<Character> {
    this.loggerService.log(`CHARACTERS SERVICE GETTING CHARACTER ${id}`);

    return this.http.get<Character>(`${BASE_URL}${CHARACTERS_ENDPOINT}/${id}${URL_SUFIX}`);  }

}