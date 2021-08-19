import { TestBed } from '@angular/core/testing';

import { WebCheckoutService } from './web-checkout.service';

describe('WebCheckoutService', () => {
  let service: WebCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
