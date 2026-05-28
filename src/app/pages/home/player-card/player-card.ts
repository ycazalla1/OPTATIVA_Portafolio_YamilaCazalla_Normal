import { Component, OnInit, PLATFORM_ID, inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Contact {
  id: number,
  contact: string,
  contactURL: string
}

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
})
export class PlayerCard implements OnInit {
  selectedContact: string | null = null;

  openPopup(contact: string) {
    this.selectedContact = contact;
  }

  closePopup() {
    this.selectedContact = null;
  }

  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);

  contacts: Contact[] = [];

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {

    // this.http.get<Contact[]>('assets/json/contacts.json')
    // .subscribe(data => {

    //   this.contacts = data;

    //   console.log(this.contacts);

    // });

    if (isPlatformBrowser(this.platformId)) {
      const res = await fetch('/assets/json/contacts.json');
      this.contacts = await res.json();
      console.log(this.contacts);
      // setTimeout(() => this.cdr.detectChanges());
      this.cdr.detectChanges();
    }
  }
}
