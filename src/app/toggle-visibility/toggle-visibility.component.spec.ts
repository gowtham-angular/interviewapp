import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleVisibilityComponent } from './toggle-visibility.component';

describe('ToggleVisibilityComponent', () => {
  let component: ToggleVisibilityComponent;
  let fixture: ComponentFixture<ToggleVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleVisibilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
