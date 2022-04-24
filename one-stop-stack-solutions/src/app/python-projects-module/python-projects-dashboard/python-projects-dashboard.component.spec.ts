import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonProjectsDashboardComponent } from './python-projects-dashboard.component';

describe('PythonProjectsDashboardComponent', () => {
  let component: PythonProjectsDashboardComponent;
  let fixture: ComponentFixture<PythonProjectsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonProjectsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonProjectsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
