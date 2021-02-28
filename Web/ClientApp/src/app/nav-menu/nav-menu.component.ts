import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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

	// Сворачиваем панель навиграции, если клик мышью произошел за пределами navbar
	@HostListener('document:click', ['$event'])
  clickOutside(e: MouseEvent) {
		if (!e.composedPath().some(p => p === this.navbar.nativeElement)) {
			this.collapse();
		}
  }

	go(url: string, e: any) {
		e.preventDefault();
		this.router.navigateByUrl(url);
	}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
