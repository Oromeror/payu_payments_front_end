import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureCvvFormComponent } from './secure-cvv-form.component';

describe('SecureCvvFormComponent', () => {
  let component: SecureCvvFormComponent;
  let fixture: ComponentFixture<SecureCvvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureCvvFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureCvvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
