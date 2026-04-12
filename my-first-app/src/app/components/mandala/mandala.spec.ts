import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mandala } from './mandala';

describe('Mandala', () => {
  let component: Mandala;
  let fixture: ComponentFixture<Mandala>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mandala],
    }).compileComponents();

    fixture = TestBed.createComponent(Mandala);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
