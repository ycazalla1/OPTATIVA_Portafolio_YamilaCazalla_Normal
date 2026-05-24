import { Component } from '@angular/core';
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
export class QuestBoardContracts {
  contracts: Contract[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<Contract[]>('assets/json/jobs.json')
      .subscribe(data => {

        this.contracts = data;

        console.log(this.contracts);

      });
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
