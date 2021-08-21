import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCheckoutComponent } from './web-checkout.component';

describe('WebCheckoutComponent', () => {
  let component: WebCheckoutComponent;
  let fixture: ComponentFixture<WebCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
