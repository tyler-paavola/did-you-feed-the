import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
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
  @ViewChild('ownerEmailInput', {static: true}) ownerEmailInput: ElementRef;
  newOwnerEmail = '';

  // New pet properties
  newPetName = '';
  newPetOwner = '';

  constructor() {}

  onCreateOwner(nameInput: HTMLInputElement, emailInput: HTMLInputElement) {
    this.ownerCreated.emit({
      ownerName: nameInput.value,
      ownerEmail: this.ownerEmailInput.nativeElement.value
    });
  }

  onCreatePet() {
    this.petCreated.emit({petName: this.newPetName, petOwner: this.newPetOwner});
  }
  


  

}
