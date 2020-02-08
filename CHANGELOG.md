# *Vimeo LazyLoad*
## CHANGELOG:


********************************************************************************
********************************************************************************
###### February 8th, 2020
## v1.0.3 - PATCH

#### CSS:
- (#1) - Vimeo iFrame has transparent padding so sometimes part of the thumbnail was visible beneath the video. Solved by adding `background-color:#000`


********************************************************************************
###### October 25th, 2019
## v1.0.2 - PATCH

#### CSS:

###### Updated:
- play button `background` properties moved from shorthand declaration to `background-position`, `background-size`, `background-position` and `background-image`.
- play button svg was minified
- play button dimensions now use `top:0;right:0;bottom:0;left:0;` instead of `width:100%;height:100%`
- logo - new svg taken from https://www.vimeo.com
- logo `background-size:100%` changed to `background-size:contain`
- removed `!important` from properties where it's unnecessary. It is added only to the most important CSS


#### JS:

###### Updated:
- `data-random=""` was changed to `data-thumb=""` for easier use of vi-lazyload
- variable names updated to more consistent ones for easier development - prefix `vi_` was added to keep the code clean. This will be usefull in the future in case new and more advanced features will be added.
- iframe source is now set using `element.src = ""` instead of `element.setAttribute('src','');`
- image `alt` attribute is now set using `element.alt = ""` instead of `element.setAttribute('alt','');`


#### OTHER:
- improved documentation


********************************************************************************
###### October 4th, 2019
## v1.0.1 - PATCH

#### JS:
- Optimizing Links for Chrome Audits - added `rel = 'noreferrer'` to logo


********************************************************************************
###### August 08, 2019
## v1.0.0 - INITIAL RELEASE
