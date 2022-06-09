import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public current_user = "ray"
  public users: any = {}

  constructor(
    private _http: HttpClient,
  ) { 
    this.getUser().subscribe(users => {
      this.users = users
      console.log(this.users)
    })
  }
  private _httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  public getUser() {
    const url = 'http://localhost:3000/users'
    return this._http.get(url, this._httpOptions)
  }
}
