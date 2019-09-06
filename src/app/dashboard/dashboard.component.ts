import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {}

  // Emit events
  @Output("newOwner") ownerCreated = new EventEmitter < {
    ownerName: string,
    ownerEmail: string
  } > ();

  @Output("newPet") petCreated = new EventEmitter < {
    petName: string,
    petOwner: string
  } > ();

  // New owner properties
  newOwnerName = '';
  newOwnerEmail = '';

  // New pet properties
  newPetName = '';
  newPetOwner = '';

  onCreateOwner() {
    this.ownerCreated.emit({ownerName: this.newOwnerName, ownerEmail: this.newOwnerEmail});
  }

  onCreatePet() {
    this.petCreated.emit({petName: this.newPetName, petOwner: this.newPetOwner});
  }
  
  constructor() {}

  

}
