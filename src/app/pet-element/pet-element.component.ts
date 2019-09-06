import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pet-element',
  templateUrl: './pet-element.component.html',
  styleUrls: ['./pet-element.component.css']
})
export class PetElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('pet') element: {
    name: string,
    email: string
  };


}
