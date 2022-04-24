import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneProjectsDashboardComponent } from './clone-projects-dashboard.component';

describe('CloneProjectsDashboardComponent', () => {
  let component: CloneProjectsDashboardComponent;
  let fixture: ComponentFixture<CloneProjectsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneProjectsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneProjectsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
