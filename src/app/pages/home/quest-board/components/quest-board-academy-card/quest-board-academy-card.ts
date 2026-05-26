import { Component, OnInit, PLATFORM_ID, inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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

  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);

  videos: Academy[] = [];

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {

    // this.http.get<Academy[]>('assets/json/academy.json')
    //   .subscribe(data => {

    //     this.videos = data;

    //     console.log(this.videos);

    //   });
    if (isPlatformBrowser(this.platformId)) {
      const res = await fetch('/assets/json/academy.json');
      this.videos = await res.json();
      console.log(this.videos);
      this.cdr.detectChanges();
    }
  }

  private sanitizer = inject(DomSanitizer);

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
