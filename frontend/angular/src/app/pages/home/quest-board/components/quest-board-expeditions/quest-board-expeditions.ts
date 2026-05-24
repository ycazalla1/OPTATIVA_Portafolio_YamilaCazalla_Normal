import { Component } from '@angular/core';
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
export class QuestBoardExpeditions {
  expeditions: Expedition[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<Expedition[]>('assets/json/expeditions.json')
      .subscribe(data => {

        this.expeditions = data;

        console.log(this.expeditions);

      });
  }
}
