import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  public char

  public basicsForm: FormGroup = new FormGroup({
    id: new FormControl(),
    user_id: new FormControl(),
    character_name: new FormControl({ updateOn: 'change' }),
    username: new FormControl({ updateOn: 'change' }),
    class_level: new FormControl({ updateOn: 'change' }),
    race: new FormControl({ updateOn: 'change' }),
    gender: new FormControl({ updateOn: 'change' }),
    heigth: new FormControl({ updateOn: 'change' }),
    age: new FormControl({ updateOn: 'change' }),
    weight: new FormControl({ updateOn: 'change' })
  })

  constructor(public characterService: CharacterService) {
    this.characterService.currentCharacter$.subscribe(character => {
      this.char = character

      this.basicsForm.patchValue({
        id: this.char["id"],
        user_id: this.char["user_id"],
        character_name: this.char["character_name"],
        username: this.char["username"],
        class_level: this.char["class_level"],
        race: this.char["race"],
        gender: this.char["gender"],
        heigth: this.char["heigth"],
        age: this.char["age"],
        weight: this.char["weight"]
      })
    })

    this.basicsForm.valueChanges.pipe(
      switchMap(form => {
        return this.characterService.updateCharacter(form)
      })
    ).subscribe()
  }
}
