import { TestBed } from '@angular/core/testing';

import { SpacexServiceService } from './spacex-service.service';

describe('SpacexServiceService', () => {
  let service: SpacexServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
