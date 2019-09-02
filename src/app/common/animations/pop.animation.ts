import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

export const popAnimation = animation([
  style({
    transform: '{{ transform }}',
    opacity: '{{ opacity }}',
  }),
  animate('{{ time }}')
]);
