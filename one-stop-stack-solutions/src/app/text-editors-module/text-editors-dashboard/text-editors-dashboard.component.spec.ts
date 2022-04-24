import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorsDashboardComponent } from './text-editors-dashboard.component';

describe('TextEditorsDashboardComponent', () => {
  let component: TextEditorsDashboardComponent;
  let fixture: ComponentFixture<TextEditorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextEditorsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
