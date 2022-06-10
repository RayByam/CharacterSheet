import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public character_list: any[] = []
  public characters: any = {}

  constructor(
    private _http: HttpClient,
  ) {
    this.getCharacter().subscribe(characters => {
      this.character_list = <any[]>characters
    })
  }
  private _httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  public getCharacter() {
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
}
