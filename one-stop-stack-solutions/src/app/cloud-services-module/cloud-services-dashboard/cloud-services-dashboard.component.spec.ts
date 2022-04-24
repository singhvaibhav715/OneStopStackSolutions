import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudServicesDashboardComponent } from './cloud-services-dashboard.component';

describe('CloudServicesDashboardComponent', () => {
  let component: CloudServicesDashboardComponent;
  let fixture: ComponentFixture<CloudServicesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudServicesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudServicesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
