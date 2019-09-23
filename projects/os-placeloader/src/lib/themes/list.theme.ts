import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: '[list]',
  template: `
  <svg:circle cx="7" cy="7" r="6"></svg:circle>
  <svg:rect x="20" y="4" rx="2" ry="2" width="120" height="5"></svg:rect>

  <svg:circle cx="7" cy="22" r="6"></svg:circle>
  <svg:rect x="20" y="19.5" rx="2" ry="2" width="110" height="5"></svg:rect>

  <svg:circle cx="7" cy="37" r="6"></svg:circle>
  <svg:rect x="20" y="34.5" rx="2" ry="2" width="120" height="5"></svg:rect>
  
  <svg:circle cx="7" cy="52" r="6"></svg:circle>
  <svg:rect x="20" y="49.5" rx="2" ry="2" width="110" height="5"></svg:rect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListTheme implements OnInit {
  constructor() { }

  ngOnInit() { }
}