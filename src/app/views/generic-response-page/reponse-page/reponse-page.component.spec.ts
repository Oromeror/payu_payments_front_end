import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponsePageComponent } from './reponse-page.component';

describe('ReponsePageComponent', () => {
  let component: ReponsePageComponent;
  let fixture: ComponentFixture<ReponsePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponsePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
