import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactDashboardComponent } from './react-dashboard.component';

describe('ReactDashboardComponent', () => {
  let component: ReactDashboardComponent;
  let fixture: ComponentFixture<ReactDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
