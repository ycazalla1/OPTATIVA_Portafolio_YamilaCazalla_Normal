import { Component, OnInit, PLATFORM_ID, inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Status } from '../../../enums.model';
import { QuestBoardInventory } from './components/quest-board-inventory/quest-board-inventory';
import { QuestBoardProjectCard } from './components/quest-board-project-card/quest-board-project-card';
import { QuestBoardAcademyCard } from './components/quest-board-academy-card/quest-board-academy-card';
import { QuestBoardExpeditions } from './components/quest-board-expeditions/quest-board-expeditions';
import { QuestBoardContracts } from './components/quest-board-contracts/quest-board-contracts';

interface Project {
  id: number,
  title: string,
  description: string,
  tech: string[],
  status: Status,
  xp: string,
  xpProgress: number,
  github: string
}

@Component({
  selector: 'app-quest-board',
  imports: [QuestBoardInventory, QuestBoardProjectCard,
    QuestBoardAcademyCard, QuestBoardExpeditions, QuestBoardContracts,
    CommonModule],
  templateUrl: './quest-board.html',
  styleUrl: './quest-board.css',
})

export class QuestBoard implements OnInit {

  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);

  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {

    // this.http.get<Project[]>('assets/json/projects.json')
    //   .subscribe(data => {

    //     this.projects = data;

    //     console.log(this.projects);

    //   });
    if (isPlatformBrowser(this.platformId)) {
      const res = await fetch('/assets/json/projects.json');
      this.projects = await res.json();
      console.log(this.projects);
      this.cdr.detectChanges();
    }
  }
}
