/**
 * Color conversion
 * Always return RGBA
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

  static calculate(color, alpha = 1) {
    // tslint:disable-next-line: max-line-length
    const RGB = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
    // tslint:disable-next-line: max-line-length
    const RGBA = /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
    // tslint:disable-next-line: max-line-length
    const HSL = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
    // tslint:disable-next-line: max-line-length
    const HSLA = /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
    const HEX = /^#([\da-f]{3}){1,2}$/i;    


    if (RGB.test(color)) {
      return this.RGBToRGBA(color);
    } else if (RGBA.test(color)) {
      return color;
    } else if (HSL.test(color)) {
      return this.HSLToRGBA(color);
    } else if (HSLA.test(color)) {
      return this.HSLAToRGBA(color);
    } else if (HEX.test(color)) {
      return this.HEXToRGBA(color);
    } else {
      console.warn('Color input is invalid!');
      return this.HEXToRGBA('#000000');
    }
  }

  // create secondary color to use within the animation
  static createSecondaryColor(color) {
    const [r, g, b, a] = color.match(/[.?\d]+/g).map(x => +x); 
    return this.RGBToRGBA(color, +(a >= 0.5 ? a - 0.63 : a + 0.63).toFixed(2));
  }

  static RGBToRGBA(color, alpha = 1) {
    const [r, g, b] = color.match(/\d+/g).map(x => x);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  static HEXToRGBA(color, alpha = 1) {
    const [r, g, b] = color.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  }

  static HSLToRGBA(color) {
    const separation = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(4).split(')')[0].split(separation);

    if (color.indexOf('/') > -1) {
      color.splice(3, 1);
    }

    let h = color[0];
    let s = color[1].substr(0, color[1].length - 1) / 100;
    let l = color[2].substr(0, color[2].length - 1) / 100;

    if (h.indexOf('deg') > -1) {
      h = h.substr(0, h.length - 3);
    } else if (h.includes('rad')) {
      h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
    } else if (h.includes('turn')) {
      h = Math.round(h.substr(0, h.length - 4) * 360);
    }

    if (h >= 360) {
      h %= 360;
    }

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 1;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `rgba(${r},${g},${b},${a})`;
  }

  static HSLAToRGBA(color) {
    const separation = color.indexOf(',') > -1 ? ',' : ' ';
    color = color.substr(5).split(')')[0].split(separation);

    if (color.indexOf('/') > -1) {
      color.splice(3, 1);
    }

    let h = color[0];
    let s = color[1].substr(0, color[1].length - 1) / 100;
    let l = color[2].substr(0, color[2].length - 1) / 100;
    let a = color[3]; 

    if (h.indexOf('deg') > -1) {
      h = h.substr(0, h.length - 3);
    } else if (h.includes('rad')) {
      h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
    } else if (h.includes('turn')) {
      h = Math.round(h.substr(0, h.length - 4) * 360);
    }

    if (h >= 360) {
      h %= 360;
    }

    if (a) {
      if (a.includes('%')) {
        a = a.substr(0, a.length - 1) / 100;
      }
    } else {
      a = 1;
    }

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;


    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `rgba(${r},${g},${b},${a})`;
  }
}
