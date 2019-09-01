import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet.model';
import { Owner } from '../../owners/owner.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styles: []
})
export class PetListComponent implements OnInit {

  // owners: Owner[] = {
  //   new Owner("John", "john@example.com");
  // }

  // pets: Pet[] = [
  //   new Pet("Dog", "Bosco", Owner),
  //   new Pet("Dog", "Brando", "Mary"),
  //   new Pet("Cat", "Finn", "Mary")
  // ]

  pets: Pet[] = [
    new Pet("Dog", "Bosco"),
    new Pet("Dog", "Brando"),
    new Pet("Cat", "Finn")
  ]

  constructor() { }

  ngOnInit() {
  }

}
