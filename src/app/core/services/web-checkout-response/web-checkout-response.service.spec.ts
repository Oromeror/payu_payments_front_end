import { TestBed } from '@angular/core/testing';

import { WebCheckoutResponseService } from './web-checkout-response.service';

describe('WebCheckoutResponseService', () => {
  let service: WebCheckoutResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebCheckoutResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
