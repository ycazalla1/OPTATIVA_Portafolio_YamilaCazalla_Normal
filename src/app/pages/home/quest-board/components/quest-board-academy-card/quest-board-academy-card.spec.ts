import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestBoardAcademyCard } from './quest-board-academy-card';

describe('QuestBoardAcademyCard', () => {
  let component: QuestBoardAcademyCard;
  let fixture: ComponentFixture<QuestBoardAcademyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestBoardAcademyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestBoardAcademyCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
