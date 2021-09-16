import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsosSecureFieldsFormComponent } from './paymentsos-secure-fields-form.component';

describe('PaymentsosSecureFieldsFormComponent', () => {
  let component: PaymentsosSecureFieldsFormComponent;
  let fixture: ComponentFixture<PaymentsosSecureFieldsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsosSecureFieldsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsosSecureFieldsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
