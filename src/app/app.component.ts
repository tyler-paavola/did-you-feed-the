import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'did-you-feed-the';
  ownerElements = [{name: 'John', email: 'john@example.com'}];

  ngOnInit() {}

  onOwnerAdded(ownerData: {ownerName: string, ownerEmail: string}) {
    this.ownerElements.push({
      name: ownerData.ownerName,
      email: ownerData.ownerEmail
    });
  }

  onPetAdded() {

  }
}
