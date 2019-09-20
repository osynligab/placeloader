import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: '[facebook]',
  template: `
    <svg:circle cx="15" cy="15" r="15"></svg:circle>

    <svg:rect x="35" y="7" rx="2" ry="2" width="110" height="5"></svg:rect>
    <svg:rect x="35" y="17" rx="2" ry="2" width="140" height="5"></svg:rect>

    <svg:rect x="0" y="40" rx="2" ry="2" width="180" height="5"></svg:rect>
    <svg:rect x="0" y="50" rx="2" ry="2" width="160" height="5"></svg:rect>
    <svg:rect x="0" y="60" rx="2" ry="2" width="150" height="5"></svg:rect>
    <svg:rect x="0" y="70" rx="2" ry="2" width="190" height="5"></svg:rect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FacebookTheme implements OnInit {
  constructor() {}

  ngOnInit() {}
}