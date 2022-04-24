import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsDashboardComponent } from './threejs-dashboard.component';

describe('ThreejsDashboardComponent', () => {
  let component: ThreejsDashboardComponent;
  let fixture: ComponentFixture<ThreejsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreejsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
