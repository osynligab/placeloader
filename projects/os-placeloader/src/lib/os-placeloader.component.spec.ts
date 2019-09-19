import {
  async,
  TestBed,
  inject,
  TestComponentRenderer
} from '@angular/core/testing';

import { PlaceloaderComponent } from './os-placeloader.component';
import { Config } from './os-placeloader.config';
import { ExpectedConditions } from 'protractor';


describe('PlaceloaderComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaceloaderComponent
      ],
    }).compileComponents();
  }));

  describe(`initialization`, () => {
    it(`should instantiate placeloader component`, async(() => {
      const fixture = TestBed.createComponent(PlaceloaderComponent);
      const comp = fixture.debugElement.componentInstance;

      expect(comp).toBeDefined();
    }));
  });

  describe(`PlaceloaderComponent functionality`, () => {
    describe(`PlaceloaderComponent props should be defined`, () => {
      it(`component prop (speed) is set`, async(() => {
        const fixture = TestBed.createComponent(PlaceloaderComponent);
        const comp = fixture.debugElement.componentInstance;

        expect(comp.speed).toBeDefined();
      }));

      it(`component prop (primaryColor) should be set`, async(() => {
        const fixture = TestBed.createComponent(PlaceloaderComponent);
        const comp = fixture.debugElement.componentInstance;

        expect(comp.primaryColor).toBeDefined();
      }));

      it(`component prop (config) should be set`, async(() => {
        const fixture = TestBed.createComponent(PlaceloaderComponent);
        const comp = fixture.debugElement.componentInstance;

        expect(comp.config).toBeDefined();
      }));

      it(`component prop (secondaryColor) should NOT be set`, async(() => {
        const fixture = TestBed.createComponent(PlaceloaderComponent);
        const comp = fixture.debugElement.componentInstance;

        expect(comp.secondaryColor).toBeUndefined();
      }));
    });

    it(`should render SVG element and template tag [content]`, async(() => {
      const fixture = TestBed.createComponent(PlaceloaderComponent);
      fixture.detectChanges();

      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('svg')).toBeDefined();
      expect(compiled.querySelector('[content]')).toBeDefined();
    }));
  });
});
