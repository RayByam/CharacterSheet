import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthWoundsComponent } from './health-wounds.component';

describe('HealthWoundsComponent', () => {
  let component: HealthWoundsComponent;
  let fixture: ComponentFixture<HealthWoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthWoundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthWoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
