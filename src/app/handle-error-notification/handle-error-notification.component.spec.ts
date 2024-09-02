import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleErrorNotificationComponent } from './handle-error-notification.component';

describe('HandleErrorNotificationComponent', () => {
  let component: HandleErrorNotificationComponent;
  let fixture: ComponentFixture<HandleErrorNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandleErrorNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleErrorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
