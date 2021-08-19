import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureFieldsFormComponent } from './secure-fields-form.component';

describe('SecureFieldsFormComponent', () => {
  let component: SecureFieldsFormComponent;
  let fixture: ComponentFixture<SecureFieldsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureFieldsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureFieldsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
