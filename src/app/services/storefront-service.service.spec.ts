import { TestBed } from '@angular/core/testing';

import { StorefrontServiceService } from './storefront-service.service';

describe('StorefrontServiceService', () => {
  let service: StorefrontServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorefrontServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
