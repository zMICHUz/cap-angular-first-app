export default class Character {
  name: string;
  age?: number;
  died?: boolean;

  constructor (name: string, public actor: string, age = 0, died = false) {
    this.name = name;
    this.age = age;
    this.died = died;
  }
}