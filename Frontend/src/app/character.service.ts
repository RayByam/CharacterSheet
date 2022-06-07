import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public characters = {
        "ray": [
          {name: "Bob", class: "Ninja", level: "1"},
          {name: "Doris", class: "Boop", level: "-1"}
        ],
        "joe": [{name: "Steve", class: "Fighter", level: "4"}]
  }

  constructor() { }
}
