import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastructureHacksDashboardComponent } from './datastructure-hacks-dashboard.component';

describe('DatastructureHacksDashboardComponent', () => {
  let component: DatastructureHacksDashboardComponent;
  let fixture: ComponentFixture<DatastructureHacksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatastructureHacksDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastructureHacksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
