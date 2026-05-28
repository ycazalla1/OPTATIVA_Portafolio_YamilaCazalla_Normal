import { Component, OnInit, PLATFORM_ID, inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Expedition {
  id: number,
  name: string,
  description: string,
}

@Component({
  selector: 'app-quest-board-expeditions',
  imports: [],
  templateUrl: './quest-board-expeditions.html',
  styleUrl: './quest-board-expeditions.css',
})
export class QuestBoardExpeditions implements OnInit {

  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);

  expeditions: Expedition[] = [];

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {

    // this.http.get<Expedition[]>('assets/json/expeditions.json')
    //   .subscribe(data => {

    //     this.expeditions = data;

    //     console.log(this.expeditions);

    //   });
    if (isPlatformBrowser(this.platformId)) {
      const res = await fetch('/assets/json/expeditions.json');
      this.expeditions = await res.json();
      console.log(this.expeditions);
      // setTimeout(() => this.cdr.detectChanges());
      this.cdr.detectChanges();
    }
  }
}
