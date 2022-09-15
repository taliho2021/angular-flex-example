import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-flex-example';

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
