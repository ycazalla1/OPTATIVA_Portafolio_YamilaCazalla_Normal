import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudBar } from './hud-bar';

describe('HudBar', () => {
  let component: HudBar;
  let fixture: ComponentFixture<HudBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HudBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HudBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
