import { TestBed } from '@angular/core/testing';

import { TakeAwayService } from './take-away.service';

describe('TakeAwayService', () => {
  let service: TakeAwayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeAwayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
