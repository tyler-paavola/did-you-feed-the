import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'did-you-feed-the';
  ownerElements = [{name: 'John', email: 'john@example.com'}];
}
