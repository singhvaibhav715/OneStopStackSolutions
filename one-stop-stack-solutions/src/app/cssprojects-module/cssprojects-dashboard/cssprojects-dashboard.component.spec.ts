import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssprojectsDashboardComponent } from './cssprojects-dashboard.component';

describe('CssprojectsDashboardComponent', () => {
  let component: CssprojectsDashboardComponent;
  let fixture: ComponentFixture<CssprojectsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssprojectsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssprojectsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
