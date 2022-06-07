import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  
  constructor(
    public userService: UserService,
    public characterService: CharacterService
  ) { }

  ngOnInit(): void {
  }

}
