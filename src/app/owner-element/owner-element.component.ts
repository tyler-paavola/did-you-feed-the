import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-owner-element',
  templateUrl: './owner-element.component.html',
  styleUrls: ['./owner-element.component.css']
})

export class OwnerElementComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  @Input('owner') element: {
    name: string,
    email: string
  };

}
