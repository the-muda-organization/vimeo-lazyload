# *Vimeo LazyLoad*
## CHANGELOG:



###### March 22nd, 2021
## v2.1.0 - UPDATE

#### CSS:
- Optimized Vimeo logo (**7.25KB smaller CSS**) - 3 different color variants were changed to a single color in CSS variable. CSS `filter` is used to generate white and dark variants. Similar solution is used in Bootstrap-5 CSS (see `.btn-close-white`).
- Fixed SVG - removed charset utf-8 from each SVG in `background-image` as it is not required.

#### JS:
- Updated Vimeo iframe `allow=""` attribute - added `picture-in-picture`



********************************************************************************
********************************************************************************
********************************************************************************
###### June 20th, 2020
## v2.0.0 - NEW VERSION (NON-BREAKING CHANGES IN HTML)

#### CSS:
- Changed layout so that container maintains 16/9 ratio even if JS not loaded
- Thumbnails are loaded as `background-image` using style attributes and CSS variables.

#### JS:
- Rebuilt from scratch
- Added lazyload (using Intersection Observer API - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [(#2)](https://github.com/the-muda-organization/vimeo-lazyload/pull/2) - Vimeo logo & link not added when `data-logo="0"`
- Important settings moved to variables at the beginning of JS file

#### OTHER:
- Improved documentation
- DEMO - Bootstrap updated to v5



********************************************************************************
********************************************************************************
********************************************************************************
###### February 8th, 2020
## v1.0.3 - PATCH

#### CSS:
- [(#1)](https://github.com/the-muda-organization/vimeo-lazyload/issues/1) - Vimeo iFrame has transparent padding so sometimes part of the thumbnail was visible beneath the video. Solved by adding `background-color:#000`



********************************************************************************
********************************************************************************
********************************************************************************
###### October 25th, 2019
## v1.0.2 - PATCH

#### CSS:

###### Updated:
- Play button `background` properties moved from shorthand declaration to `background-position`, `background-size`, `background-position` and `background-image`.
- Play button svg was minified
- Play button dimensions now use `top:0;right:0;bottom:0;left:0;` instead of `width:100%;height:100%`
- Logo - new svg taken from https://www.vimeo.com
- Logo `background-size:100%` changed to `background-size:contain`
- Removed `!important` from properties where it's unnecessary. It is added only to the most important CSS


#### JS:

###### Updated:
- `data-random=""` was changed to `data-thumb=""` for easier use of vi-lazyload
- Variable names updated to more consistent ones for easier development - prefix `vi_` was added to keep the code clean. This will be usefull in the future in case new and more advanced features will be added.
- Iframe source is now set using `element.src = ""` instead of `element.setAttribute('src','');`
- Image `alt` attribute is now set using `element.alt = ""` instead of `element.setAttribute('alt','');`


#### OTHER:
- Improved documentation



********************************************************************************
********************************************************************************
********************************************************************************
###### October 4th, 2019
## v1.0.1 - PATCH

#### JS:
- Optimizing Links for Chrome Audits - added `rel = 'noreferrer'` to logo



********************************************************************************
********************************************************************************
********************************************************************************
###### August 08, 2019
## v1.0.0 - INITIAL RELEASE
