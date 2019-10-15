import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectUpdateCreateDialogComponent } from './research-project-update-create-dialog.component';

describe('ResearchProjectUpdateCreateDialogComponent', () => {
  let component: ResearchProjectUpdateCreateDialogComponent;
  let fixture: ComponentFixture<ResearchProjectUpdateCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchProjectUpdateCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchProjectUpdateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
