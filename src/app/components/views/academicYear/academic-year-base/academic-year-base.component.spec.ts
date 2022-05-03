import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearBaseComponent } from './academic-year-base.component';

describe('AcademicYearBaseComponent', () => {
  let component: AcademicYearBaseComponent;
  let fixture: ComponentFixture<AcademicYearBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicYearBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
