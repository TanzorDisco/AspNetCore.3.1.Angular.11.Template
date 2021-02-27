import { animate, animation, state, style, transition, trigger } from "@angular/animations";

export const navbarExpantionAnimation = trigger("navbarExpantionAnimation", [
	state('collapsed', 
		style({ width: '5rem' }),
	),
	state('expanded', 
		style({ width: '14rem' })
	),
	transition('collapsed => expanded', animate('.7s cubic-bezier(0, 1, 0, 1)'))
])

export const smoothEnterAnimation = trigger('smoothEnterAnimation', [
	transition(':enter', [
		style({ opacity: 1, transform: 'translateX(-10px)' }),
		animate('1s cubic-bezier(0, 1, 0, 1)', style({ opacity: 1, transform: 'translateX(0px)' }))
	]),
	transition(':leave', [
		style({ opacity: 1, transform: 'translateX(0px)' }),
		animate('100ms', style({ opacity: 0, transform: 'translateX(-50px)' })),
	])
])