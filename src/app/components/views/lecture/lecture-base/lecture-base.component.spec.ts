import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureBaseComponent } from './lecture-base.component';

describe('LectureBaseComponent', () => {
  let component: LectureBaseComponent;
  let fixture: ComponentFixture<LectureBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
