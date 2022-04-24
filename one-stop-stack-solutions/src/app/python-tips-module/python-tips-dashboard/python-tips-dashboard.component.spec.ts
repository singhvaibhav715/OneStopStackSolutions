import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonTipsDashboardComponent } from './python-tips-dashboard.component';

describe('PythonTipsDashboardComponent', () => {
  let component: PythonTipsDashboardComponent;
  let fixture: ComponentFixture<PythonTipsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonTipsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonTipsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
