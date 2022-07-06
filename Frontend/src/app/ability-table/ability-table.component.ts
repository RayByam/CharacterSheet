import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability-table',
  templateUrl: './ability-table.component.html',
  styleUrls: ['./ability-table.component.css']
})
export class AbilityTableComponent implements OnInit {

  @Input() label: string
  @Input() score: number
  @Input() modifier: number
  @Input() tempScore: number
  @Input() tempMod: number
  
  constructor() { }

  ngOnInit(): void {
  }

}
