import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestBoardStats } from './quest-board-stats';

describe('QuestBoardStats', () => {
  let component: QuestBoardStats;
  let fixture: ComponentFixture<QuestBoardStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestBoardStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestBoardStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
