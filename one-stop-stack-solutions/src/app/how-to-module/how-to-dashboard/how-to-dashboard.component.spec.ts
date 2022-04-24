import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToDashboardComponent } from './how-to-dashboard.component';

describe('HowToDashboardComponent', () => {
  let component: HowToDashboardComponent;
  let fixture: ComponentFixture<HowToDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
