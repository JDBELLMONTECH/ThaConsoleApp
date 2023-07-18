import { TestBed } from '@angular/core/testing';

import { FileManagementServiceService } from './file-management-service.service';

describe('FileManagementServiceService', () => {
  let service: FileManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
