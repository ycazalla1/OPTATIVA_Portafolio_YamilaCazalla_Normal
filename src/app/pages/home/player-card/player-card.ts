import { Component } from '@angular/core';
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
export class PlayerCard {
  selectedContact: string | null = null;

  openPopup(contact: string) {
    this.selectedContact = contact;
  }

  closePopup() {
    this.selectedContact = null;
  }

  contacts: Contact[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<Contact[]>('assets/json/contacts.json')
      .subscribe(data => {

        this.contacts = data;

        console.log(this.contacts);

      });
  }
}
