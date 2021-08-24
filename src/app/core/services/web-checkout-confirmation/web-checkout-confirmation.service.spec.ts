import { TestBed } from '@angular/core/testing';

import { WebCheckoutConfirmationService } from './web-checkout-confirmation.service';

describe('WebCheckoutConfirmationService', () => {
  let service: WebCheckoutConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebCheckoutConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
