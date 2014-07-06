generator-mywebapp
==================

yeoman generator for webapp

## Features

Please see [gulpfile.js](app/templates/gulpfile.js) or [gruntfile.js](app/templates/gruntfile.js) for up to date information on what I support.

* Extremely easy project structure
* Optionally [gulp](http://gulpjs.com) or [grunt](http://gruntjs.com), [SASS](http://sass-lang.com) or [LESS](http://lesscss.org)
* Prepared mixins with vendor prefixes
* Optionally including useful js libraries
* Built-in preview server with browser-sync
* Automagically compile SASS or LESS
* Awesome image optimization
* Awesome image sprites. Just put your png images in `img/sprites` and run `gulp sprite` or `grunt sprite`.   
* Manually wire-up dependencies installed with [Bower](http://bower.io) 

## Getting Started

- Install: `npm install -g generator-mywebapp`
- Run: `yo mywebapp`
- Run `gulp` or `grunt` for preview

## Options

- `--skip-install`
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.