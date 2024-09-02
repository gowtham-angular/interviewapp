import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementPaginationComponent } from './implement-pagination.component';

describe('ImplementPaginationComponent', () => {
  let component: ImplementPaginationComponent;
  let fixture: ComponentFixture<ImplementPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImplementPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
