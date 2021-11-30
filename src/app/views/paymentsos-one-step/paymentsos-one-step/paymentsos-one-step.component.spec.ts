import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsosOneStepComponent } from './paymentsos-one-step.component';

describe('PaymentsosOneStepComponent', () => {
  let component: PaymentsosOneStepComponent;
  let fixture: ComponentFixture<PaymentsosOneStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsosOneStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsosOneStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
