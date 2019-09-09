import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'did-you-feed-the';
  ownerElements = [{name: 'Jane', email: 'jane@example.com'}];
  petElements = [{name: 'Bosco', owner: 'Jane'}];

  ngOnInit() {}

  onOwnerAdded(ownerData: {ownerName: string, ownerEmail: string}) {
    this.ownerElements.push({
      name: ownerData.ownerName,
      email: ownerData.ownerEmail
    });
  }

  onPetAdded(petData: {petName: string, petOwner: string}) {
    this.petElements.push({
      name: petData.petName,
      owner: petData.petOwner
    });
  }

  onChangeFirst() {
    this.petElements[0].name = "Changed!";
  }
}
