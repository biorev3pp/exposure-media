import { TestBed } from '@angular/core/testing';

import { HmindexService } from './hmindex.service';

describe('HmindexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HmindexService = TestBed.get(HmindexService);
    expect(service).toBeTruthy();
  });
});
