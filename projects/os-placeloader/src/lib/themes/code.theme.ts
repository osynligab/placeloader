import {
    ChangeDetectionStrategy,
    Component,
    OnInit
  } from '@angular/core';
  
  @Component({
    selector: '[code]',
    template: `
    <svg:rect x="0" y="0" rx="2" ry="2" width="25" height="3"></svg:rect>
    <svg:rect x="28" y="0" rx="2" ry="2" width="40" height="3"></svg:rect>
    <svg:rect x="71" y="0" rx="2" ry="2" width="10" height="3"></svg:rect>
    
    <svg:rect x="5" y="6" rx="2" ry="2" width="10" height="3"></svg:rect>
    <svg:rect x="17" y="6" rx="2" ry="2" width="31" height="3"></svg:rect>
    <svg:rect x="50" y="6" rx="2" ry="2" width="50" height="3"></svg:rect>

    <svg:rect x="5" y="12" rx="2" ry="2" width="20" height="3"></svg:rect>
    <svg:rect x="28" y="12" rx="2" ry="2" width="20" height="3"></svg:rect>
    <svg:rect x="50" y="12" rx="2" ry="2" width="15" height="3"></svg:rect>
    <svg:rect x="67" y="12" rx="2" ry="2" width="30" height="3"></svg:rect>

    <svg:rect x="0" y="18" rx="2" ry="2" width="20" height="3"></svg:rect>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  
  export class CodeTheme implements OnInit {
    constructor() { }
  
    ngOnInit() { }
  }