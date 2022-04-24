import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHacksDashboardComponent } from './git-hacks-dashboard.component';

describe('GitHacksDashboardComponent', () => {
  let component: GitHacksDashboardComponent;
  let fixture: ComponentFixture<GitHacksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHacksDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHacksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
