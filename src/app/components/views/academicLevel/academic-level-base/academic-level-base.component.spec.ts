import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicLevelBaseComponent } from './academic-level-base.component';

describe('AcademicLevelBaseComponent', () => {
  let component: AcademicLevelBaseComponent;
  let fixture: ComponentFixture<AcademicLevelBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicLevelBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicLevelBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
