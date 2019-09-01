import {
  Component,
  OnInit
} from '@angular/core';

import {
  Owner
} from '../owner.model';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styles: []
})

export class OwnerListComponent implements OnInit {

  owners: Owner[] = [
    new Owner("John", "john@gmail.com"),
    new Owner("Jane", "jane@gmail.com"),
  ];

  constructor() {}

  ngOnInit() {}

}
