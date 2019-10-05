# Vimeo LazyLoad
LazyLoad Embed Vimeo Player - simple and lightweight plugin - pure JS


********************************************************************************
## Status
[![Latest Stable Version](https://poser.pugx.org/the-muda-organization/vimeo-lazyload/version)](https://packagist.org/packages/the-muda-organization/vimeo-lazyload)
[![Latest Unstable Version](https://poser.pugx.org/the-muda-organization/vimeo-lazyload/v/unstable)](https://packagist.org/packages/the-muda-organization/vimeo-lazyload)

[![Total Downloads](https://poser.pugx.org/the-muda-organization/vimeo-lazyload/downloads)](https://packagist.org/packages/the-muda-organization/vimeo-lazyload)
[![Monthly Downloads](https://poser.pugx.org/the-muda-organization/vimeo-lazyload/d/monthly)](https://packagist.org/packages/the-muda-organization/vimeo-lazyload)
[![Daily Downloads](https://poser.pugx.org/the-muda-organization/vimeo-lazyload/d/daily)](https://packagist.org/packages/the-muda-organization/vimeo-lazyload)

[![CSS gzip size](https://img.badgesize.io/the-muda-organization/vimeo-lazyload/master/vi-lazyload/1.0.1/css/vi-lazyload.min.css?compression=gzip&label=CSS+gzip+size)](https://github.com/the-muda-organization/vimeo-lazyload/blob/master/vi-lazyload/1.0.1/css/vi-lazyload.min.css)
[![JS gzip size](https://img.badgesize.io/the-muda-organization/vimeo-lazyload/master/vi-lazyload/1.0.1/js/vi-lazyload.min.js?compression=gzip&label=JS+gzip+size)](https://github.com/the-muda-organization/vimeo-lazyload/blob/master/vi-lazyload/1.0.1/js/vi-lazyload.min.js)

[![License Code](https://poser.pugx.org/the-muda-organization/vimeo-lazyload/license)](https://packagist.org/packages/the-muda-organization/vimeo-lazyload)


## [View Preview](https://htmlpreview.github.io/?https://github.com/the-muda-organization/vimeo-lazyload/blob/master/DEMO.html)
<img src="https://github.com/the-muda-organization/vimeo-lazyload/blob/master/PREVIEW.jpg?raw=true" alt="" style="width:100%;display:block;">


********************************************************************************
## Table of contents
- [Status](#status)
- [Quick Start](#quick-start)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Features](#features)
- [CSS Classes](#css-classes)
- [Versioning](#versioning)
- [Changelog](#changelog)
- [Team](#team)
- [Code of Conduct](#code-of-conduct)
- [Copyright and License](#copyright-and-license)


********************************************************************************
## Quick Start

Several options are available:
- [Download the latest release.](https://github.com/the-muda-organization/vimeo-lazyload/archive/master.zip)
- Clone the repo: `git clone https://github.com/the-muda-organization/vimeo-lazyload.git`
- Install with [Composer](https://getcomposer.org/): `composer require the-muda-organization/vimeo-lazyload`


********************************************************************************
## What's included
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

There are no dependencies. No jQuery or other plugins required. See below for [Installation Guide](#installation) and [How to Use](#how-to-use)
```
vi-lazyload/
 │
 └─ 1.x.x/
    │
    ├── css/
    │   ├── vi-lazyload.css
    │   └── vi-lazyload.min.css
    │
    └── js/
        ├── vi-lazyload.js
        └── vi-lazyload.min.js
```


********************************************************************************
## Bugs and feature requests
Have a bug or a feature request? Before opening a new issue search for existing and closed issues. If your problem or idea is not addressed yet, [open a new issue](https://github.com/the-muda-organization/vimeo-lazyload/issues/new).


********************************************************************************
## Installation

1. Download and copy files to your project
2. Open [vi-lazyload.js](https://github.com/the-muda-organization/vimeo-lazyload/blob/master/vi-lazyload/1.0.1/js/vi-lazyload.js)
3. Change: **line 24** "https://raw.githubusercontent.com/the-muda-organization/vimeo-lazyload/master/demo-img/" to custom folder to store your thumbnails.<br>I am not sure if it will work in all cases, but you may use vimeo domain https://i.vimeocdn.com/video/**VIDEO-ID**.webp?mw=700&mh=392
4. Minify JS and place it in [vi-lazyload.min.js](https://github.com/the-muda-organization/vimeo-lazyload/blob/master/vi-lazyload/1.0.1/js/vi-lazyload.min.js) or simply find variable and change to your domain.
5. Add CSS and JS to your project:
```html
    <link href="https://example.com/vi-lazyload/1.x.x/css/vi-lazyload.min.css" rel="stylesheet">
    <script src="https://example.com/vi-lazyload/1.x.x/js/vi-lazyload.min.js"></script>
```


********************************************************************************
## How to Use

1. Get Vimeo ID of your movie, example: ``272532681``
2. Add the folowing code to embed a video:
```html
<div class="vi-lazyload" data-id="272532681" data-random="" data-logo="3"></div>
```
3. Name your thumbnail using Vimeo ID ``272532681.jpg`` - to use other file types change file type in JS file
4. Place your thumbnail in a folder specified in JS file


********************************************************************************
## Features

Attribute | Explanation
------------ | -------------
``class="vi-lazyload"``   | Main container. You can add additional styling classes ex. border, box-shadow etc.
``data-id="272532681"``   | Vimeo video ID
``data-random=""``        | If you need to add more thumbnails here you can randomize which one is displayed. Name your files ``272532681.jpg`` adding custom suffix. For 3 thumbnails make ``272532681--1.jpg``, ``272532681--2.jpg`` and  ``272532681--3.jpg``. To show thumbnail 2 use ``data-random="--2"`` and so on. You can randomize numbers using ``<?php echo mt_rand(1,3);?>``. Leave empty if you have only 1 thumbnail.
``data-logo="3"``         | Vimeo logo color. Available: 0=none, 1=blue, 2=dark, 3=white. You can customize it in CSS file.


********************************************************************************
## CSS Classes

CSS class                                          | Explanation
------------                                       | -------------
``.vi-lazyload``                                   | main container
``.vi-lazyload-img``                               | thumbnail
``.vi-lazyload-playbtn``                           | play button (black)
``.vi-lazyload-playbtn:hover``                     | play button on hover (blue)
``.vi-lazyload-logo``                              | Vimeo logo
``.vi-lazyload-logo:hover``                        | Vimeo logo on hover
``.vi-lazyload[data-logo="X"] .vi-lazyload-logo``  | Vimeo logo color based on data attribute
``.vi-lazyload iframe``                            | Vimeo embeded iframe after click


********************************************************************************
## Versioning
Vimeo LazyLoad will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:
```<major>.<minor>.<patch>```


********************************************************************************
## Changelog
For last releases see detailed [CHANGELOG](https://github.com/the-muda-organization/vimeo-lazyload/blob/master/CHANGELOG.md).


********************************************************************************
## Team
-  [Jakub Muda](https://github.com/jakubmuda)


********************************************************************************
## Code of conduct
We will behave ourselves if you behave yourselves. For more details see our
[CODE_OF_CONDUCT.md](https://github.com/the-muda-organization/vimeo-lazyload/blob/master/CODE_OF_CONDUCT.md).


********************************************************************************
## Copyright and license
Code and documentation copyright 2017-2019 [The MUDA Organization](https://muda.pl).

Code released under the [MIT License](https://github.com/the-muda-organization/vimeo-lazyload/blob/master/LICENSE).


********************************************************************************


