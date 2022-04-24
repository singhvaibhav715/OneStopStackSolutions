import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLearningDashboardComponent } from './machine-learning-dashboard.component';

describe('MachineLearningDashboardComponent', () => {
  let component: MachineLearningDashboardComponent;
  let fixture: ComponentFixture<MachineLearningDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineLearningDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineLearningDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
