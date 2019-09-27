

# Osynlig Placeloader

A small collection of customizable SVG components to create placeholder loading indicators instead of spinner, like cards loading.

  
## Install
```
npm i @osynlig/os-placeloader --save
```
### How to use
```javascript
import  {  PlaceloaderModule  }  from  '@osynlig/os-placeloader';

@NgModule({
	imports: [
		PlaceloaderModule
	]
});

```
```html
  <os-placeloader speed="2200" primaryColor="rgb(220, 221, 222)" height="74" width="399">
    <svg:g code></svg:g>
  </os-placeloader>

  <os-placeloader speed="2200" primaryColor="#dcddde" height="157" width="399">
    <svg:g facebook></svg:g>
  </os-placeloader>

  <os-placeloader speed="2200" primaryColor="#dcddde" height="120" width="399">
    <svg:g content></svg:g>
  </os-placeloader>

  <os-placeloader speed="2200" primaryColor="#dcddde" height="124" width="399">
    <svg:g list></svg:g>
  </os-placeloader>
```

#### Presets (at the moment...)
  - content
  - facebook
  - list
  - code

## Properties

| | |  | |
|--|--|--|--|
| **speed** | number | `1200` | animation speed |
| **primaryColor** | string | `#dcddde` | placeloader color can be in rgb(), rgba(), hsl(), hsla() or #hex |
| **width** | number | `320` | width of the placeloader |
| **height** | number | `100` | height of the placeloader |

## Development

Fork the repo then clone it
`$ git clone git@github.com:osynligab/placeloader.git`

`cd into the folder`

Install the dependencies
`$ yarn` or `npm i`

Run the demo app
`$ npm start`


## TODO
- Build demo page