import {
    ChangeDetectionStrategy,
    Component,
    OnInit
  } from '@angular/core';
  
  @Component({
    selector: '[code]',
    template: `
    <svg:rect x="0" y="0" rx="2" ry="2" width="125" height="5"></svg:rect>
    <svg:rect x="130" y="0" rx="2" ry="2" width="40" height="5"></svg:rect>
    <svg:rect x="175" y="0" rx="2" ry="2" width="20" height="5"></svg:rect>
    
    <svg:rect x="5" y="10" rx="2" ry="2" width="35" height="5"></svg:rect>
    <svg:rect x="45" y="10" rx="2" ry="2" width="50" height="5"></svg:rect>
    <svg:rect x="100" y="10" rx="2" ry="2" width="40" height="5"></svg:rect>

    <svg:rect x="5" y="20" rx="2" ry="2" width="55" height="5"></svg:rect>
    <svg:rect x="65" y="20" rx="2" ry="2" width="50" height="5"></svg:rect>
    <svg:rect x="120" y="20" rx="2" ry="2" width="40" height="5"></svg:rect>

    <svg:rect x="0" y="30" rx="2" ry="2" width="195" height="5"></svg:rect>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  
  export class CodeTheme implements OnInit {
    constructor() { }
  
    ngOnInit() { }
  }