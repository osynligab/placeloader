import {
    ChangeDetectionStrategy,
    Component,
    OnInit
  } from '@angular/core';
  
  @Component({
    selector: '[content]',
    template: `
    <svg:rect x="0" y="0" rx="2" ry="2" width="100" height="3"></svg:rect>
    <svg:rect x="10" y="6" rx="2" ry="2" width="80" height="3"></svg:rect>
    <svg:rect x="10" y="12" rx="2" ry="2" width="65" height="3"></svg:rect>
    <svg:rect x="0" y="18" rx="2" ry="2" width="100" height="3"></svg:rect>
    <svg:rect x="10" y="24" rx="2" ry="2" width="70" height="3"></svg:rect>
    <svg:rect x="10" y="30" rx="2" ry="2" width="40" height="3"></svg:rect>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  
  export class ContentTheme implements OnInit {
    constructor() { }
  
    ngOnInit() { }
  }