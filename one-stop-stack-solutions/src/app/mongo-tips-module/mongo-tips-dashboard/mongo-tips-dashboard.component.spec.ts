import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoTipsDashboardComponent } from './mongo-tips-dashboard.component';

describe('MongoTipsDashboardComponent', () => {
  let component: MongoTipsDashboardComponent;
  let fixture: ComponentFixture<MongoTipsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongoTipsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoTipsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
