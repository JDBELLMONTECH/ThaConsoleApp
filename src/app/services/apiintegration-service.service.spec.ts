import { TestBed } from '@angular/core/testing';

import { APIIntegrationServiceService } from './apiintegration-service.service';

describe('APIIntegrationServiceService', () => {
  let service: APIIntegrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIIntegrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
