import {
    ChangeDetectionStrategy,
    Component,
    OnInit
  } from '@angular/core';
  
  @Component({
    selector: '[content]',
    template: `
    <svg:rect x="0" y="0" rx="2" ry="2" width="180" height="5"></svg:rect>
    <svg:rect x="10" y="10" rx="2" ry="2" width="140" height="5"></svg:rect>
    <svg:rect x="10" y="20" rx="2" ry="2" width="115" height="5"></svg:rect>
    <svg:rect x="0" y="30" rx="2" ry="2" width="165" height="5"></svg:rect>
    <svg:rect x="10" y="40" rx="2" ry="2" width="100" height="5"></svg:rect>
    <svg:rect x="10" y="50" rx="2" ry="2" width="120" height="5"></svg:rect>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  
  export class ContentTheme implements OnInit {
    constructor() { }
  
    ngOnInit() { }
  }