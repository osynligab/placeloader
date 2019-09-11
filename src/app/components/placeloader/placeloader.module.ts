import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceloaderComponent } from './placeloader.component';
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
  ]
})
export class PlaceloaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlaceloaderModule
    };
  }
}
