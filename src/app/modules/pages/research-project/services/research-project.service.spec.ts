import { TestBed } from '@angular/core/testing';

import { ResearchProjectService } from './research-project.service';

describe('ResearchProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResearchProjectService = TestBed.get(ResearchProjectService);
    expect(service).toBeTruthy();
  });
});
