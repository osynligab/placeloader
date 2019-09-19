import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: '[facebook]',
  template: `
    <svg:rect x="0" y="5" rx="10" ry="10" width="20" height="20"></svg:rect>
    <svg:rect x="25" y="10" rx="2" ry="2" width="50" height="3"></svg:rect>
    <svg:rect x="25" y="16" rx="2" ry="2" width="70" height="3"></svg:rect>
    <svg:rect x="0" y="30" rx="2" ry="2" width="100" height="3"></svg:rect>
    <svg:rect x="0" y="36" rx="2" ry="2" width="80" height="3"></svg:rect>
    <svg:rect x="0" y="42" rx="2" ry="2" width="90" height="3"></svg:rect>
    <svg:rect x="0" y="48" rx="2" ry="2" width="100" height="3"></svg:rect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FacebookTheme implements OnInit {
  constructor() {}

  ngOnInit() {}
}