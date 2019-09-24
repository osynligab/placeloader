/**
 * Color conversion
 * Always return either RGB or RGBA
 *
 * @param color - color input
 * @return color - color output
 * @return secondaryColor - secondary color output
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ColorConversion {

  constructor() {
  }

  static calculate(color) {
    // tslint:disable-next-line: max-line-length
    const RGB = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
    // tslint:disable-next-line: max-line-length
    const RGBA = /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
    // tslint:disable-next-line: max-line-length
    const HSL = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
    // tslint:disable-next-line: max-line-length
    const HSLA = /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
    const HEX = /^#([\da-f]{3}){1,2}$/i;
    const HEXA = /^#([\da-f]{4}){1,2}$/i;


    if (RGB.test(color)) {
      return color;
    } else if (RGBA.test(color)) {
      return color;
    } else if (HSL.test(color)) {
      return this.HLSToRGB(color);
    } else if (HSLA.test(color)) {
      return this.HLSAToRGBA(color);
    } else if (HEX.test(color)) {
      return this.HEXToRGB(color);
    } else {
      throw new Error(`Color input is invalid`);
    }
  }

  // create secondary color to use within the animation
  static createSecondaryColor(color) {
    console.log(color);
    return color;
  }

  // public RGBToHex = (color) => {
  //   const separation = color.indexOf(',') > -1 ? ',' : ' ';
  //   color = color.substr(4).split(')')[0].split(separation);

  //   // tslint:disable-next-line: forin
  //   for (const R in color) {
  //     const r = color[R];

  //     if (r.indexOf('%') > - 1) {
  //       color[R] = Math.round(r.substr(0, r.length - 1) / 100 * 255);
  //     }
  //   }

  //   // tslint:disable-next-line: one-variable-per-declaration
  //   let r = (+color[0]).toString(16);
  //   let g = (+color[1]).toString(16);
  //   let b = (+color[2]).toString(16);

  //   if (r.length === 1) {
  //     r = `0${r}`;
  //   }

  //   if (g.length === 1) {
  //     g = `0${g}`;
  //   }

  //   if (b.length === 1) {
  //     b = `0${b}`;
  //   }

  //   console.log(`#${r}${g}${b}`);

  //   return `#${r}${g}${b}`;
  // }

  static HEXToRGB(color) {
    console.log('hex', color);
    return color;
  }

  static HLSToRGB(color) {
    console.log('hls', color);
    return color;
  }

  static HLSAToRGBA(color) {
    console.log('hlsa', color);
    return color;
  }
}
