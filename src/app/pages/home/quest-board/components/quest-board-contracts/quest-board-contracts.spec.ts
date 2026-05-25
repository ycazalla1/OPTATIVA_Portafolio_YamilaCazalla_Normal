import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestBoardContracts } from './quest-board-contracts';

describe('QuestBoardContracts', () => {
  let component: QuestBoardContracts;
  let fixture: ComponentFixture<QuestBoardContracts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestBoardContracts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestBoardContracts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
