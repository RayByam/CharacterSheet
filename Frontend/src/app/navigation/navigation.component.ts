import { Component, AfterViewInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {

  public currentCharacter: any

  constructor(
    public userService: UserService,
    public characterService: CharacterService,
  ) {
    this.characterService.currentCharacter$.subscribe(char => {
      this.currentCharacter = char
    })
  }
  
  ngAfterViewInit(): void {
 
  }
  selectUser(user: any) {
    this.userService.current_user= user
  }

  noCharacter(){
    this.characterService.currentCharacter = null
  }
}
