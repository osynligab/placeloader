import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: '[list]',
  template: `
  <svg:rect x="0" y="0" rx="2" ry="2" width="4" height="4"></svg:rect>
  <svg:rect x="10" y="0.5" rx="2" ry="2" width="80" height="3"></svg:rect>
  <svg:rect x="0" y="8" rx="2" ry="2" width="4" height="4"></svg:rect>
  <svg:rect x="10" y="8.5" rx="2" ry="2" width="80" height="3"></svg:rect>
  <svg:rect x="0" y="16" rx="2" ry="2" width="4" height="4"></svg:rect>
  <svg:rect x="10" y="16.5" rx="2" ry="2" width="80" height="3"></svg:rect>
  <svg:rect x="0" y="24" rx="2" ry="2" width="4" height="4"></svg:rect>
  <svg:rect x="10" y="24.5" rx="2" ry="2" width="80" height="3"></svg:rect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListTheme implements OnInit {
  constructor() { }

  ngOnInit() { }
}