import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptApiComponent } from './javascript-api.component';

describe('JavascriptApiComponent', () => {
  let component: JavascriptApiComponent;
  let fixture: ComponentFixture<JavascriptApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
