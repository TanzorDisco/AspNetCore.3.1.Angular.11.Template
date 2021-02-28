import { Component, ViewEncapsulation } from '@angular/core';
import { routerTransition } from 'src/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
	animations: [
		routerTransition
	]
})
export class AppComponent {
  title = 'app';
}
