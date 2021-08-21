import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormSandboxComponent } from './payment-form-sandbox.component';

describe('PaymentFormSandboxComponent', () => {
  let component: PaymentFormSandboxComponent;
  let fixture: ComponentFixture<PaymentFormSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentFormSandboxComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFormSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
