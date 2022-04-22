import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuCardForDashboardsComponent } from './neu-card-for-dashboards.component';

describe('NeuCardForDashboardsComponent', () => {
  let component: NeuCardForDashboardsComponent;
  let fixture: ComponentFixture<NeuCardForDashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuCardForDashboardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuCardForDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
