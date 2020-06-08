import { TestBed } from '@angular/core/testing';

import { DevsearchService } from './devsearch.service';

describe('DevsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevsearchService = TestBed.get(DevsearchService);
    expect(service).toBeTruthy();
  });
});
