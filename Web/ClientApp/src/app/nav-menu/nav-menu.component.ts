import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { navbarExpantionAnimation, smooth } from './../../animations';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
	animations: [
		smooth,
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
		
	}

	@HostListener('document:click', ['$event'])
  clickOutside(e: any) {
		console.log(e);
    // this.collapse();
  }

	go(url: string, e: any) {
		e.preventDefault();
		this.router.navigateByUrl(url);
		// setTimeout(() => { this.collapse() });
	}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
