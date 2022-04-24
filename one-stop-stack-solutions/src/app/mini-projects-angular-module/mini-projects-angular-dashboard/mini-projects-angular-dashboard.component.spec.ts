import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjectsAngularDashboardComponent } from './mini-projects-angular-dashboard.component';

describe('MiniProjectsAngularDashboardComponent', () => {
  let component: MiniProjectsAngularDashboardComponent;
  let fixture: ComponentFixture<MiniProjectsAngularDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniProjectsAngularDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProjectsAngularDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
