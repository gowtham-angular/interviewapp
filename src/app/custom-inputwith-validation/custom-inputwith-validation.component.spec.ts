import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputwithValidationComponent } from './custom-inputwith-validation.component';

describe('CustomInputwithValidationComponent', () => {
  let component: CustomInputwithValidationComponent;
  let fixture: ComponentFixture<CustomInputwithValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomInputwithValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInputwithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
