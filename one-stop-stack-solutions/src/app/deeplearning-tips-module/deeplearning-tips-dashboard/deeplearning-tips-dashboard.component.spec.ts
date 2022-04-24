import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeplearningTipsDashboardComponent } from './deeplearning-tips-dashboard.component';

describe('DeeplearningTipsDashboardComponent', () => {
  let component: DeeplearningTipsDashboardComponent;
  let fixture: ComponentFixture<DeeplearningTipsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeeplearningTipsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeplearningTipsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
