import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCheckoutResponseComponent } from './web-checkout-response.component';

describe('WebCheckoutResponseComponent', () => {
  let component: WebCheckoutResponseComponent;
  let fixture: ComponentFixture<WebCheckoutResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCheckoutResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCheckoutResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
