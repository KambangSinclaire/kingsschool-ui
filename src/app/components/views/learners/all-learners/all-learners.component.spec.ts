import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLearnersComponent } from './all-learners.component';

describe('AllLearnersComponent', () => {
  let component: AllLearnersComponent;
  let fixture: ComponentFixture<AllLearnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLearnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLearnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
