import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandasDashboardComponent } from './pandas-dashboard.component';

describe('PandasDashboardComponent', () => {
  let component: PandasDashboardComponent;
  let fixture: ComponentFixture<PandasDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandasDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
