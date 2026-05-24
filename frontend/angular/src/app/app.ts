import { Component, importProvidersFrom, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerCard } from './pages/home/player-card/player-card';
import { QuestBoard } from './pages/home/quest-board/quest-board';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayerCard, QuestBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}
