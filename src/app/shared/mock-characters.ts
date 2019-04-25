import Character from './character.model';

const mockCharacters: Array<Character> = [
  new Character('Eddard "Ned" Stark', 'Sean Bean', 40, true),
  new Character('Bran Stark', 'Isaac Hempstead Wright', 18, false),
  new Character('Sansa Stark', 'Sophie Turner', 20),
  new Character('Daenerys Targaryen', 'Emilia Clarke', 17),
  new Character('Jon Snow', 'Kit Harington'),
  {
    name: 'Arya Stark', 
    actor: 'Maisie Williams',
    age: 18,
    died: false 
  },
  {
    name: 'Gendry', 
    actor: 'Joe Dempsie',
    age: 23 
  },
  new Character('Rhaegal', '', 6),
  new Character('Viserion', '', 6, true),
  new Character('Drogon', '', 6)
]

export default mockCharacters