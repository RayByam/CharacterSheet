import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-labelled-input',
  templateUrl: './labelled-input.component.html',
  styleUrls: ['./labelled-input.component.css']
})
export class LabelledInputComponent implements OnInit {

  @Input() label: string
  @Input() controlName: string
  @Input() formGroup: FormGroup
  @Input() placeholder: string

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
