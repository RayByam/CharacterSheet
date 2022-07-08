import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.characterService.getCharacters().subscribe(characters => {
      this.characterService.currentCharacter = characters.find(character => character.id == id)
    })
  }

  ngOnInit(): void {
  }

}
