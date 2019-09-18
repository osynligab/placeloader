import {
  OnInit,
  Input,
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import { Config } from './placeloader.config';

@Component({
  selector: 'os-placeloader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    {{speed}}
    {{primaryColor}}
    {{secondaryColor}}
    <svg version="1.1" preserveAspectRatio="${Config.PreserveRatio}" viewBox="0 0 100 100">
      <svg:defs>
        <svg:linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <svg:stop offset="0%" stop-color="${Config.PrimaryColor}">
            <svg:animate attributeName="stop-color" values="${Config.PrimaryColor}; ${Config.SecondaryColor}; ${Config.PrimaryColor}" dur="${Config.Speed}ms" repeatCount="indefinite"/>
          </svg:stop>
          <svg:stop offset="100%" stop-color="${Config.SecondaryColor}">
              <svg:animate attributeName="stop-color" values="${Config.SecondaryColor}; ${Config.PrimaryColor}; ${Config.SecondaryColor}" dur="${Config.Speed}ms" repeatCount="indefinite"/>
          </svg:stop>
        </svg:linearGradient>
      </svg:defs>
      <svg:g ${Config.Type} fill="url('#gradient')">
          <ng-content></ng-content>
      </svg:g>
    </svg>
  `
})
export class PlaceloaderComponent implements OnInit {

  /** Which type och loader  */
  @Input()
  public type = Config.Type;

  /** Animation speed  */
  @Input()
  public speed = Config.Speed;

  /** Primary color  */
  @Input()
  public primaryColor = Config.PrimaryColor;

  /** Secondary color  */
  @Input()
  public secondaryColor = Config.SecondaryColor;

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Initialize the component.
   */
  ngOnInit() {
    console.log(this);
  }
}
