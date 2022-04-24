import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencvDashboardComponent } from './opencv-dashboard.component';

describe('OpencvDashboardComponent', () => {
  let component: OpencvDashboardComponent;
  let fixture: ComponentFixture<OpencvDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpencvDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencvDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
