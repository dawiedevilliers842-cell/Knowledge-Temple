import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesConstellation } from './quotes-constellation';

describe('QuotesConstellation', () => {
  let component: QuotesConstellation;
  let fixture: ComponentFixture<QuotesConstellation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotesConstellation],
    }).compileComponents();

    fixture = TestBed.createComponent(QuotesConstellation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
