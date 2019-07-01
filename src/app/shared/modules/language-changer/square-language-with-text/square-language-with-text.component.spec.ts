import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareLanguageWithTextComponent } from './square-language-with-text.component';

describe('SquareLanguageWithTextComponent', () => {
  let component: SquareLanguageWithTextComponent;
  let fixture: ComponentFixture<SquareLanguageWithTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareLanguageWithTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareLanguageWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
