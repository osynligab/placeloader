import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceloaderComponent } from './placeloader.component';
import { Config } from './placeloader.config';

describe('PlaceloaderComponent', () => {
  let component: PlaceloaderComponent;
  let fixture: ComponentFixture<PlaceloaderComponent>;

  it('should load svg template', () => {
    expect(component.speed).toBe(Config.Speed);
    expect(component.primaryColor).toBe(Config.PrimaryColor);
    expect(component.secondaryColor).toBe(Config.SecondaryColor);
  })
});
