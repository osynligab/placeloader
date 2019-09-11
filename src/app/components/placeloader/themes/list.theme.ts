import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: '[list]',
  template: `
    <svg:rect x="0" y="5" rx="10" ry="10" width="15" height="15"></svg:rect>
    <svg:rect x="20" y="5" rx="2" ry="2" width="50" height="4"></svg:rect>
    <svg:rect x="20" y="10" rx="2" ry="2" width="70" height="4"></svg:rect>
    <svg:rect x="20" y="15" rx="2" ry="2" width="30" height="4"></svg:rect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListTheme implements OnInit {
  constructor() { }

  ngOnInit() { }
}