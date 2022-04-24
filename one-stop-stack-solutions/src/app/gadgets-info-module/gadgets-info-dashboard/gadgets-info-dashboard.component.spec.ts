import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetsInfoDashboardComponent } from './gadgets-info-dashboard.component';

describe('GadgetsInfoDashboardComponent', () => {
  let component: GadgetsInfoDashboardComponent;
  let fixture: ComponentFixture<GadgetsInfoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadgetsInfoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetsInfoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
