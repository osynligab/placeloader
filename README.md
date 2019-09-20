

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
<os-placeloader speed="2200" primaryColor="#dcddde" height="320">
	<svg:g  content></svg:g>
</os-placeloader>

<os-placeloader speed="500" primaryColor="#ff00ff">
	<svg:g  list></svg:g>
</os-placeloader>

<os-placeloader speed="500" primaryColor="#ff00ff">
	<svg:rect x="0" y="5" rx="10" ry="10" width="15" height="15"></svg:rect>
	<svg:rect x="20" y="5" rx="2" ry="2" width="50" height="4"></svg:rect>´
	<svg:rect x="20" y="10" rx="2" ry="2" width="70" height="4"></svg:rect>
	<svg:rect x="20" y="15" rx="2" ry="2" width="30" height="4"></svg:rect>
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
| **primaryColor** | string | `#dcddde` | placeloader color **must be in #hex value** |
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