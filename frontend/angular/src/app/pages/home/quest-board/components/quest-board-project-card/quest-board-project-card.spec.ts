import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestBoardProjectCard } from './quest-board-project-card';

describe('QuestBoardProjectCard', () => {
  let component: QuestBoardProjectCard;
  let fixture: ComponentFixture<QuestBoardProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestBoardProjectCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestBoardProjectCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
