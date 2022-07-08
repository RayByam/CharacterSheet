import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackBonusComponent } from './attack-bonus.component';

describe('AttackBonusComponent', () => {
  let component: AttackBonusComponent;
  let fixture: ComponentFixture<AttackBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
