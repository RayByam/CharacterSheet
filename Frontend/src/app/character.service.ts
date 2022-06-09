import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public character_list = {

  }

  constructor(private _http: HttpClient,
  ) {
    this.getCharacterList().subscribe(characters => {
      this.character_list = characters
      console.log(this.character_list)
    })
  }
  private _httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  public getCharacterList() {
    const url = 'http://localhost:3000/characters'
    return this._http.get(url, this._httpOptions)
  }
}
