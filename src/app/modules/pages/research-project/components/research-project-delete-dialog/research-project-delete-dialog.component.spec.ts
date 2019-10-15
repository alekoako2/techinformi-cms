import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectDeleteDialogComponent } from './research-project-delete-dialog.component';

describe('ResearchProjectDeleteDialogComponent', () => {
  let component: ResearchProjectDeleteDialogComponent;
  let fixture: ComponentFixture<ResearchProjectDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchProjectDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchProjectDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
