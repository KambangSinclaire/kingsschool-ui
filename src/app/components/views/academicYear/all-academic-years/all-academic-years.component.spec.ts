import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAcademicYearsComponent } from './all-academic-years.component';

describe('AllAcademicYearsComponent', () => {
  let component: AllAcademicYearsComponent;
  let fixture: ComponentFixture<AllAcademicYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAcademicYearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAcademicYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
