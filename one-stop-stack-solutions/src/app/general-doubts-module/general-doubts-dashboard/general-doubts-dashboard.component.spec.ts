import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDoubtsDashboardComponent } from './general-doubts-dashboard.component';

describe('GeneralDoubtsDashboardComponent', () => {
  let component: GeneralDoubtsDashboardComponent;
  let fixture: ComponentFixture<GeneralDoubtsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralDoubtsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDoubtsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
