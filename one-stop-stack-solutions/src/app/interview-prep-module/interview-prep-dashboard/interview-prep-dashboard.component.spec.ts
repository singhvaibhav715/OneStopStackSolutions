import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPrepDashboardComponent } from './interview-prep-dashboard.component';

describe('InterviewPrepDashboardComponent', () => {
  let component: InterviewPrepDashboardComponent;
  let fixture: ComponentFixture<InterviewPrepDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewPrepDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewPrepDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
