import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceloaderComponent } from './placeloader.component';
import { FacebookTheme } from './themes/facebook.theme';
import { ContentTheme } from './themes/content.theme';
import { ListTheme } from './themes/list.theme';
import { CodeTheme } from './themes/code.theme';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaceloaderComponent,
    FacebookTheme,
    ContentTheme,
    ListTheme,
    CodeTheme
  ],
  exports: [
    PlaceloaderComponent,
    FacebookTheme,
    ContentTheme,
    ListTheme,
    CodeTheme
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
