import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericResponsePageComponent } from './generic-response-page.component';

describe('GenericResponsePageComponent', () => {
  let component: GenericResponsePageComponent;
  let fixture: ComponentFixture<GenericResponsePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericResponsePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericResponsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
