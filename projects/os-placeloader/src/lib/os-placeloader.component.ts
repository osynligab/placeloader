import {
  OnInit,
  Input,
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import { Config } from './os-placeloader.config';

@Component({
  selector: 'os-placeloader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './os-placeloader.component.html'
})

export class PlaceloaderComponent implements OnInit {

  /** Animation speed  */
  @Input()
  public speed = Config.Speed;

  /** Primary color  */
  @Input()
  public primaryColor = Config.PrimaryColor;

  /** Secondary color  */
   secondaryColor: string;
   colors: any;


  config = Config;
  /**
   * Constructor
   */
  constructor() { }

  /**
   * Initialize the component.
   */
  ngOnInit() {
    this.secondaryColor = this.createSecondaryColor(this.primaryColor, 18).toString();
    // our color loop
    this.colors = `${this.secondaryColor};${this.primaryColor};${this.secondaryColor}`;
  }

  createSecondaryColor(color: any, amount: number) {

    // split the color into R G B values
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    // make the color brighter than the input
    R = R + amount;
    G = G + amount;
    B = B + amount;

    if (R > 255) { R = 255; } else if (R < 0) { R = 0; }
    if (G > 255) { G = 255; } else if (G < 0) { G = 0; }
    if (B > 255) { B = 255; } else if (B < 0) { B = 0; }

    // put it all together
    let RR = ((R.toString(16).length === 1) ? `0${R.toString(16)}` : R.toString(16));
    let GG = ((G.toString(16).length === 1) ? `0${G.toString(16)}` : G.toString(16));
    let BB = ((B.toString(16).length === 1) ? `0${B.toString(16)}` : B.toString(16));

    return `#${RR}${GG}${BB}`;
  }
}
