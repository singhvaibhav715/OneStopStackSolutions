import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpyDashboardComponent } from './numpy-dashboard.component';

describe('NumpyDashboardComponent', () => {
  let component: NumpyDashboardComponent;
  let fixture: ComponentFixture<NumpyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumpyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumpyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
