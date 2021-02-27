import { animate, animation, state, style, transition, trigger } from "@angular/animations";

export const navbarExpantionAnimation = trigger("navbarExpantionAnimation", [
	state('collapsed', 
		style({ width: '4rem' }),
	),
	state('expanded', 
		style({ width: '14rem' })
	),
	transition('collapsed <=> expanded', animate('.7s cubic-bezier(0, 1, 0, 1)')),
])

export const smooth = trigger('smooth', [
	transition(':enter', [
		style({ opacity: 0, transform: 'translateX(-10px)' }),
		animate('5s cubic-bezier(0, 1, 0, 1)', style({ opacity: 1, transform: 'translateX(0px)' }))
	]),
	transition(':leave', [
		style({ opacity: 0, transform: 'translateX(-10px)' }),
		animate('5s cubic-bezier(0, 1, 0, 1)', style({ opacity: 1, transform: 'translateX(0px)' }))
	])
])