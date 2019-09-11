import {
  OnInit,
  Input,
  OnDestroy,
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import { Config } from './placeloader.config';

@Component({
  selector: 'os-placeloader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="[before-svg]"></ng-content>
      <svg version="1.1" preserveAspectRatio="${Config.PreserveRatio}" viewBox="0 0 100 100">
          <ng-content></ng-content>
      </svg>
    <ng-content select="[after-svg]"></ng-content>
  `
})
export class PlaceloaderComponent implements OnInit, OnDestroy {

  /** type of placeloader (template). */
  @Input()
  public preset = 'content';

  /** animation speed  */
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
  constructor(
  ) { }

  /**
   * Initialize the component.
   */
  ngOnInit() {
    console.log('placeloader', this);
  }

  /**
   * Destroy the component.
   */
  ngOnDestroy() {
  }
}
