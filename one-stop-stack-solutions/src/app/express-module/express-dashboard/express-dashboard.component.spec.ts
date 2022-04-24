import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressDashboardComponent } from './express-dashboard.component';

describe('ExpressDashboardComponent', () => {
  let component: ExpressDashboardComponent;
  let fixture: ComponentFixture<ExpressDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
