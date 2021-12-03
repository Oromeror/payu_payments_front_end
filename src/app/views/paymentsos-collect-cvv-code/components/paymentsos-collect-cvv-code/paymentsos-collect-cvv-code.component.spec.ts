import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsosCollectCvvCodeComponent } from './paymentsos-collect-cvv-code.component';

describe('PaymentsosCollectCvvCodeComponent', () => {
  let component: PaymentsosCollectCvvCodeComponent;
  let fixture: ComponentFixture<PaymentsosCollectCvvCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsosCollectCvvCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsosCollectCvvCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
