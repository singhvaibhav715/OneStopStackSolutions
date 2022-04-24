import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaskTipsDashboardComponent } from './flask-tips-dashboard.component';

describe('FlaskTipsDashboardComponent', () => {
  let component: FlaskTipsDashboardComponent;
  let fixture: ComponentFixture<FlaskTipsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlaskTipsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaskTipsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
