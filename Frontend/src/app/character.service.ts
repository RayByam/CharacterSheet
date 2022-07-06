import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';

const currentCharacterSubject: BehaviorSubject<any> = new BehaviorSubject<any>(undefined)
export const currentCharacter$: Observable<any> = currentCharacterSubject.pipe(filter(c => c !== undefined))

@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  public character_list: any[] = []

  public currentCharacter$: Observable<any> = currentCharacterSubject.pipe(filter(c => c !== undefined))
  
  set currentCharacter(character: any) {
    currentCharacterSubject.next(character)
  }

  constructor(
    private _http: HttpClient,
  ) {
    this.getCharacters().subscribe(characters => {
      this.currentCharacter = characters[0]
      this.character_list = <any[]>characters
    })
  }

  private _httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  public getCharacters() {
    const url = 'http://localhost:3000/characters'
    return this._http.get(url, this._httpOptions)
  }

  //Delete Character
  public deleteCharacter(characterID) {
    const url = 'http://localhost:3000/character/' + characterID
    return this._http.delete(url, this._httpOptions).pipe(tap(() => {
      this.removeCharacter(characterID)
    }))
  }

  public removeCharacter(characterID: any[]) {
    let tempList = this.character_list.filter(character => character.id != characterID)
    console.log(tempList)
    this.character_list = tempList
  }

  //Update Character
  public updateCharacter(character: any) {
    const url = 'http://localhost:3000/character'
    character["id"] = +character["id"]
    character["user_id"] = +character["user_id"]
    return this._http.put(url, character, this._httpOptions)
  }

  //Create new Character
  public createCharacter(user: any) {
    const url = 'http://localhost:3000/character'
    return this._http.post(url, user, this._httpOptions)
  }
}



