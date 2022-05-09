import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit = function () {
    document.body.className = 'cyber';
  };
  ngOnDestroy() {
    document.body.className = '';
  }
}
