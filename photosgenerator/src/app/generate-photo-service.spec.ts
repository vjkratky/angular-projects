import { TestBed } from '@angular/core/testing';

import { GeneratePhotoService } from './generate-photo-service';

describe('GeneratePhotoService', () => {
  let service: GeneratePhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratePhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
