import { Component, OnInit, PLATFORM_ID, inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Task {
  taskId: number,
  description: string
}

interface Contract {
  id: number,
  initialYear: number,
  finalYear: number,
  job: string,
  enterprise: string,
  ubication: string,
  tasks: Task[]
}

@Component({
  selector: 'app-quest-board-contracts',
  imports: [CommonModule],
  templateUrl: './quest-board-contracts.html',
  styleUrl: './quest-board-contracts.css',
})
export class QuestBoardContracts implements OnInit {

  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);

  contracts: Contract[] = [];

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {

    // this.http.get<Contract[]>('assets/json/jobs.json')
    //   .subscribe(data => {

    //     this.contracts = data;

    //     console.log(this.contracts);

    //   });
    if (isPlatformBrowser(this.platformId)) {
      const res = await fetch('/assets/json/jobs.json');
      this.contracts = await res.json();
      console.log(this.contracts);
      this.cdr.detectChanges();
    }
  }

  getPosition(index: number) {
    const positions = [
      { 'top': '21%', 'left': '7.5%' },
      { 'top': '21%', 'left': '22.8%' },
      { 'top': '21%', 'left': '38.1%' }
    ];

    console.log('position:', index, positions[index]);
    return positions[index] || { 'top': '0%', 'left': '0%' };
  }
}
