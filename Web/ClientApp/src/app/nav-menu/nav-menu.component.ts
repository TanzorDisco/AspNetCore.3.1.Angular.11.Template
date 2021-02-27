import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { navbarExpantionAnimation, smoothEnterAnimation } from './../../animations';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
	animations: [
		smoothEnterAnimation,
		navbarExpantionAnimation
 	]
})
export class NavMenuComponent implements AfterViewInit {
	
  isExpanded = false;

	@ViewChild('navbar', { static: true })
	navbar: ElementRef;

	get state(): string {
		return this.isExpanded ? 'expanded' : 'collapsed'
	}

	constructor(private router: Router) {
	}

	ngAfterViewInit(): void {
		fromEvent(this.navbar.nativeElement, 'mouseenter')
			.subscribe(() => this.toggle());

		fromEvent(this.navbar.nativeElement, 'mouseleave')
			.subscribe(() => this.collapse());
	}

	go(url: string, e: any) {
		e.preventDefault();
		console.log(e);
		this.router.navigateByUrl(url);
		setTimeout(() => { this.collapse() });
	}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
