import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxDashboardComponent } from './linux-dashboard.component';

describe('LinuxDashboardComponent', () => {
  let component: LinuxDashboardComponent;
  let fixture: ComponentFixture<LinuxDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
