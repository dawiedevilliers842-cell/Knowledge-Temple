import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentContainer } from './employment-container';

describe('EmploymentContainer', () => {
  let component: EmploymentContainer;
  let fixture: ComponentFixture<EmploymentContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(EmploymentContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
