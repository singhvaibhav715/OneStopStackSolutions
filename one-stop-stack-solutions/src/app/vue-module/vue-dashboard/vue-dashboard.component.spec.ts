import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueDashboardComponent } from './vue-dashboard.component';

describe('VueDashboardComponent', () => {
  let component: VueDashboardComponent;
  let fixture: ComponentFixture<VueDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
