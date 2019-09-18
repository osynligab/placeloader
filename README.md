
  

# Placeloader

  

  

This project was built by [Osynlig](https://osynlig.se) with **love** and [Angular CLI](https://github.com/angular/angular-cli) version 8.3.1.

  

## Development server

  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Install
### npm
```
npm install os-placeloader --save
```
### How to use  

import (app.module.ts)
```
import  {  PlaceloaderModule  }  from  './components/placeloader/placeloader.module';

imports: [
	...
	PlaceloaderModule
]
```

    <os-placeloader  speed="2200"  primaryColor="#dcddde">
	    <svg:g content></svg:g>
    </os-placeloader>

- @primaryColor - the main color of the loader
- @speed - animation speed

  

>  **<svg:g content>** e.g (content, list) more templates will be built.
> if you would like to use your own **SVG**
> just replace **<svg:g content></svg:g>** with your SVG code

  

## Running unit tests

  

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

  

## Running end-to-end tests

  

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

  

## TODO

  

- Build demo page