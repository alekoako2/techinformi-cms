import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { QrjPublicationsNavigationComponent } from './depositeds-navigation.component'

describe('MainComponent', () => {
  let component: QrjPublicationsNavigationComponent
  let fixture: ComponentFixture<QrjPublicationsNavigationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrjPublicationsNavigationComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjPublicationsNavigationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
