import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjectsVueDashboardComponent } from './mini-projects-vue-dashboard.component';

describe('MiniProjectsVueDashboardComponent', () => {
  let component: MiniProjectsVueDashboardComponent;
  let fixture: ComponentFixture<MiniProjectsVueDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniProjectsVueDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProjectsVueDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
