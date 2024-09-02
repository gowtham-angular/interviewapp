import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementRouteGauardComponent } from './implement-route-gauard.component';

describe('ImplementRouteGauardComponent', () => {
  let component: ImplementRouteGauardComponent;
  let fixture: ComponentFixture<ImplementRouteGauardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImplementRouteGauardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementRouteGauardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
