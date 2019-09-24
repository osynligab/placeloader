import {
  OnInit,
  Input,
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import { Config } from './os-placeloader.config';
import { ColorConversion } from './helpers/colorConversion';

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

  /** Height */
  @Input()
  public height = Config.Height;

  /** Width */
  @Input()
  public width = Config.Width;

  /** Secondary color  */
  public secondaryColor;  

  /** gradientId */
  public gradientId = generateId();

  colors;
  config = Config;
  /**
   * Constructor
   */
  constructor() { }

  /**
   * Initialize the component.
   */
  ngOnInit() {

    const color = ColorConversion.calculate(this.primaryColor);

    this.secondaryColor = ColorConversion.createSecondaryColor(color);
    // our color loop
    this.colors = `${this.secondaryColor};${this.primaryColor};${this.secondaryColor}`;
  }

  get viewBox(): string {
    const height: number = (this.height as any) / 2;
    const width: number = (this.width as any) / 2;

    return `0 0 ${width} ${height}`;
  }
}

export function generateId() {
  const id = Math.floor(Math.random() * 100) + 1;

  return `os-fill-${id.toString()}`;
}
