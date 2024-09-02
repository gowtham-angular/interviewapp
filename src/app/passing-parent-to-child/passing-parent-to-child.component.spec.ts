import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingParentToChildComponent } from './passing-parent-to-child.component';

describe('PassingParentToChildComponent', () => {
  let component: PassingParentToChildComponent;
  let fixture: ComponentFixture<PassingParentToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassingParentToChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassingParentToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
