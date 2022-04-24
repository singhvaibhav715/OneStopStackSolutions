import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptTipsDashboardComponent } from './javascript-tips-dashboard.component';

describe('JavascriptTipsDashboardComponent', () => {
  let component: JavascriptTipsDashboardComponent;
  let fixture: ComponentFixture<JavascriptTipsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptTipsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptTipsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
