import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlTipsDashboardComponent } from './sql-tips-dashboard.component';

describe('SqlTipsDashboardComponent', () => {
  let component: SqlTipsDashboardComponent;
  let fixture: ComponentFixture<SqlTipsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlTipsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlTipsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
