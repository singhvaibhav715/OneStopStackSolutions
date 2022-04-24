import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityForumDashboardComponent } from './community-forum-dashboard.component';

describe('CommunityForumDashboardComponent', () => {
  let component: CommunityForumDashboardComponent;
  let fixture: ComponentFixture<CommunityForumDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityForumDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityForumDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
