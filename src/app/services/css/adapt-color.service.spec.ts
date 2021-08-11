import { TestBed } from '@angular/core/testing';

import { AdaptColorService } from './adapt-color.service';

describe('AdaptColorService', () => {
  let service: AdaptColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdaptColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
