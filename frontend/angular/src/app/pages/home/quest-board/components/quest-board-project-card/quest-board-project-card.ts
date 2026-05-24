import { Component, Input } from '@angular/core';
import { Status } from '../../../../../enums.model';

@Component({
  selector: 'app-quest-board-project-card',
  imports: [],
  templateUrl: './quest-board-project-card.html',
  styleUrl: './quest-board-project-card.css',
})
export class QuestBoardProjectCard {
  @Input() project!: any;
  Status = Status;
}
