import { TestBed } from '@angular/core/testing';

import { SpecialOfferService } from './special-offer.service';

describe('SpecialOfferService', () => {
  let service: SpecialOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
