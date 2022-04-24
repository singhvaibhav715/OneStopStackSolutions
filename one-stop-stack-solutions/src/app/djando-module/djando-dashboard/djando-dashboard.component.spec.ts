import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjandoDashboardComponent } from './djando-dashboard.component';

describe('DjandoDashboardComponent', () => {
  let component: DjandoDashboardComponent;
  let fixture: ComponentFixture<DjandoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjandoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjandoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
