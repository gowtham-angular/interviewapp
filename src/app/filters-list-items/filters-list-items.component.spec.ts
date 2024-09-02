import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersListItemsComponent } from './filters-list-items.component';

describe('FiltersListItemsComponent', () => {
  let component: FiltersListItemsComponent;
  let fixture: ComponentFixture<FiltersListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersListItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
