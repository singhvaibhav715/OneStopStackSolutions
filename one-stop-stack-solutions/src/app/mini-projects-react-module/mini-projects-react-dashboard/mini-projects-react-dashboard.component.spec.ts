import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjectsReactDashboardComponent } from './mini-projects-react-dashboard.component';

describe('MiniProjectsReactDashboardComponent', () => {
  let component: MiniProjectsReactDashboardComponent;
  let fixture: ComponentFixture<MiniProjectsReactDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniProjectsReactDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProjectsReactDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
