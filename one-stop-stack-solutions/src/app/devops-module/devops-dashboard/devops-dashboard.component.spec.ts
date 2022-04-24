import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsDashboardComponent } from './devops-dashboard.component';

describe('DevopsDashboardComponent', () => {
  let component: DevopsDashboardComponent;
  let fixture: ComponentFixture<DevopsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
