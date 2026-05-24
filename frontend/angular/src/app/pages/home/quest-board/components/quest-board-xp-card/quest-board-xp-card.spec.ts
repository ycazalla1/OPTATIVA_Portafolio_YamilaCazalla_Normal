import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestBoardXpCard } from './quest-board-xp-card';

describe('QuestBoardXpCard', () => {
  let component: QuestBoardXpCard;
  let fixture: ComponentFixture<QuestBoardXpCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestBoardXpCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestBoardXpCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
