import { TestBed } from '@angular/core/testing';

import { SpecialPrizesService } from './special-prizes.service';

describe('SpecialPrizesService', () => {
  let service: SpecialPrizesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialPrizesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
