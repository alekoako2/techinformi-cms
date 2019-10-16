import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUpdateCreateDialogComponent } from './news-update-create-dialog.component';

describe('NewsUpdateCreateDialogComponent', () => {
  let component: NewsUpdateCreateDialogComponent;
  let fixture: ComponentFixture<NewsUpdateCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsUpdateCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsUpdateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
