import { Component, OnInit, PLATFORM_ID, inject,
  ChangeDetectorRef, HostListener } from '@angular/core';
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
export class QuestBoardAcademyCard implements OnInit {

  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  isMobile = false;
  showVideos = true;
  currentPage = 0;

  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 950;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth < 950;

      if (wasMobile && !this.isMobile) {
        this.currentPage--;
      }
    }
  }

  videos: Academy[] = [];

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
      // setTimeout(() => this.cdr.detectChanges());
      this.cdr.detectChanges();
    }
  }

  private sanitizer = inject(DomSanitizer);

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  nextPage() {
    this.showVideos = false;
    setTimeout(() => {
      if (this.isMobile) {
        this.currentPage += 1;
      } else {
        this.currentPage += 2;
      }
      this.showVideos = true;
      this.cdr.detectChanges();
    }, 0);
  }
}
