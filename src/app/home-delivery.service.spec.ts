import { TestBed } from '@angular/core/testing';

import { HomeDeliveryService } from './home-delivery.service';

describe('HomeDeliveryService', () => {
  let service: HomeDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
