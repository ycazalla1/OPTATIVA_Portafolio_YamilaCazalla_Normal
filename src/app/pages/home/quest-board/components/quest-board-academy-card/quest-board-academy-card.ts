import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Academy {
  id: number,
  title: string,
  urlId: string
}

@Component({
  selector: 'app-quest-board-academy-card',
  imports: [],
  templateUrl: './quest-board-academy-card.html',
  styleUrl: './quest-board-academy-card.css',
})
export class QuestBoardAcademyCard {
  videos: Academy[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<Academy[]>('assets/json/academy.json')
      .subscribe(data => {

        this.videos = data;

        console.log(this.videos);

      });
  }

  private sanitizer = inject(DomSanitizer);

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
