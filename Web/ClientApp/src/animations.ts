import { animate, animation, query, state, style, transition, trigger } from "@angular/animations";

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

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(
      ':leave',
      [style({ opacity: 1, position: 'fixed', transform: 'translateX(0px)' }), animate('0.1s', style({ opacity: 0, transform: 'translateX(-2px)' }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0, position: 'fixed', transform: 'translateX(2px)' }), animate('0.1s', style({ opacity: 1, transform: 'translateX(0)' }))],
      { optional: true }
    )
  ])
])