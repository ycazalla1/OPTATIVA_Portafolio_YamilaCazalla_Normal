import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudBarCard } from './hud-bar-card';

describe('HudBarCard', () => {
  let component: HudBarCard;
  let fixture: ComponentFixture<HudBarCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HudBarCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HudBarCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
