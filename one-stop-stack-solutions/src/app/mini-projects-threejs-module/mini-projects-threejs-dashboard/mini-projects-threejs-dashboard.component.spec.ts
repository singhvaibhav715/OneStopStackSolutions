import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjectsThreejsDashboardComponent } from './mini-projects-threejs-dashboard.component';

describe('MiniProjectsThreejsDashboardComponent', () => {
  let component: MiniProjectsThreejsDashboardComponent;
  let fixture: ComponentFixture<MiniProjectsThreejsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniProjectsThreejsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProjectsThreejsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
