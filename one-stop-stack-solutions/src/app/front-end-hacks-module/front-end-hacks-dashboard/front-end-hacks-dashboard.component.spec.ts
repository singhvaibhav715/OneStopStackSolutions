import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndHacksDashboardComponent } from './front-end-hacks-dashboard.component';

describe('FrontEndHacksDashboardComponent', () => {
  let component: FrontEndHacksDashboardComponent;
  let fixture: ComponentFixture<FrontEndHacksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndHacksDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndHacksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
