import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNotificationsDashboardComponent } from './latest-notifications-dashboard.component';

describe('LatestNotificationsDashboardComponent', () => {
  let component: LatestNotificationsDashboardComponent;
  let fixture: ComponentFixture<LatestNotificationsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestNotificationsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNotificationsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
