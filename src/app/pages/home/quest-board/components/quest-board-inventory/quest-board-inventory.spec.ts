import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestBoardInventory } from './quest-board-inventory';

describe('QuestBoardInventory', () => {
  let component: QuestBoardInventory;
  let fixture: ComponentFixture<QuestBoardInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestBoardInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestBoardInventory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
