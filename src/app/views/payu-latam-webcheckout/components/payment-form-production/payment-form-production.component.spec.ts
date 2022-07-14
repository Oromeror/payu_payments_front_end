import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormProductionComponent } from './payment-form-production.component';

describe('PaymentFormProductionComponent', () => {
  let component: PaymentFormProductionComponent;
  let fixture: ComponentFixture<PaymentFormProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentFormProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFormProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
