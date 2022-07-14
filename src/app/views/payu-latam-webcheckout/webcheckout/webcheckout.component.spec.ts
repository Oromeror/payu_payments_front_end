import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcheckoutComponent } from './webcheckout.component';

describe('WebcheckoutComponent', () => {
  let component: WebcheckoutComponent;
  let fixture: ComponentFixture<WebcheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
