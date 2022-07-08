import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { UserService } from '../user.service';
import { Router, Routes } from '@angular/router';
import { CharacterSheetComponent } from '../character-sheet/character-sheet.component';



@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(
    public userService: UserService,
    public characterService: CharacterService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  delete(characterID: number) {
    this.characterService.deleteCharacter(characterID).subscribe()
  }

  post(user: any) {
    this.characterService.createCharacter(user).subscribe(character => {
      this.router.navigate(['/charactersheet/' + character['id']])
    });
  }

  setCurrentCharacter(character: any) {
    this.characterService.currentCharacter = character
  }
}



