import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceloaderComponent } from './os-placeloader.component';
import { ContentTheme } from './themes/content.theme';
import { ListTheme } from './themes/list.theme';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaceloaderComponent,
    ContentTheme,
    ListTheme
  ],
  exports: [
    PlaceloaderComponent,
    ContentTheme,
    ListTheme
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PlaceloaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlaceloaderModule
    };
  }
}
