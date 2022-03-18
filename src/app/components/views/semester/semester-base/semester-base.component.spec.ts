import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterBaseComponent } from './semester-base.component';

describe('SemesterBaseComponent', () => {
  let component: SemesterBaseComponent;
  let fixture: ComponentFixture<SemesterBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemesterBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
