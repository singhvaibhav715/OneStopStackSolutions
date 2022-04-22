import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuButtonComponent } from './neu-button.component';

describe('NeuButtonComponent', () => {
  let component: NeuButtonComponent;
  let fixture: ComponentFixture<NeuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
