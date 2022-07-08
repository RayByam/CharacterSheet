import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { HealthWoundsComponent } from './health-wounds/health-wounds.component';
import { BasicsComponent } from './basics/basics.component';
import { LabelledInputComponent } from './labelled-input/labelled-input.component';
import { AbilityTableComponent } from './ability-table/ability-table.component';
import { SaveBonusComponent } from './save-bonus/save-bonus.component';
import { AttackBonusComponent } from './attack-bonus/attack-bonus.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CharacterListComponent,
    CharacterSheetComponent,
    AbilitiesComponent,
    HealthWoundsComponent,
    BasicsComponent,
    LabelledInputComponent,
    AbilityTableComponent,
    SaveBonusComponent,
    AttackBonusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
