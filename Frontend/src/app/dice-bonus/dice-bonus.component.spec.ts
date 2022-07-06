import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceBonusComponent } from './dice-bonus.component';

describe('DiceBonusComponent', () => {
  let component: DiceBonusComponent;
  let fixture: ComponentFixture<DiceBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
