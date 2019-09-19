import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: '[content]',
  template: `
    <svg:rect x="0" y="5" rx="10" ry="10" width="15" height="15"></svg:rect>
    <svg:rect x="20" y="5" rx="2" ry="2" width="50" height="4"></svg:rect>
    <svg:rect x="20" y="10" rx="2" ry="2" width="70" height="4"></svg:rect>
    <svg:rect x="20" y="15" rx="2" ry="2" width="30" height="4"></svg:rect>
    <svg:rect x="0" y="30" rx="2" ry="2" width="100" height="4"></svg:rect>
    <svg:rect x="0" y="35" rx="2" ry="2" width="80" height="4"></svg:rect>
    <svg:rect x="0" y="40" rx="2" ry="2" width="90" height="4"></svg:rect>
    <svg:rect x="0" y="45" rx="2" ry="2" width="100" height="4"></svg:rect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContentTheme implements OnInit {
  constructor() {}

  ngOnInit() {}
}