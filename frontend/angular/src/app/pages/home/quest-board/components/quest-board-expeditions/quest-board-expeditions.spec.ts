import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestBoardExpeditions } from './quest-board-expeditions';

describe('QuestBoardExpeditions', () => {
  let component: QuestBoardExpeditions;
  let fixture: ComponentFixture<QuestBoardExpeditions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestBoardExpeditions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestBoardExpeditions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
