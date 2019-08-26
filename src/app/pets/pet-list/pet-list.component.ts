import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styles: []
})
export class PetListComponent implements OnInit {

  pets: Pet[] = [
    new Pet("Dog", "Bosco"),
    new Pet("Dog", "Brando"),
    new Pet("Cat", "Finn")
  ]

  constructor() { }

  ngOnInit() {
  }

}
