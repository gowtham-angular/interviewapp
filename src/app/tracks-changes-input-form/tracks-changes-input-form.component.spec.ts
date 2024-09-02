import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksChangesInputFormComponent } from './tracks-changes-input-form.component';

describe('TracksChangesInputFormComponent', () => {
  let component: TracksChangesInputFormComponent;
  let fixture: ComponentFixture<TracksChangesInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TracksChangesInputFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksChangesInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
