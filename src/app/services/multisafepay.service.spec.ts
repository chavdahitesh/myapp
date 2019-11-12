import { TestBed } from '@angular/core/testing';

import { MultisafepayService } from './multisafepay.service';

describe('MultisafepayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultisafepayService = TestBed.get(MultisafepayService);
    expect(service).toBeTruthy();
  });
});
