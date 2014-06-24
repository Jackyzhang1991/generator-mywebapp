generator-mywebapp
==================

yeoman generator for webapp

## Features

Please see [gulpfile.js](app/templates/gulpfile.js) for up to date information on what I support.

* Extremely easy project structure
```
app/
|-css/
|-fonts/
|-img/
    |-sprite/
|-js/
    |-vendor
    |-main.js
|-sass/
    |-core/
        |-_base.scss 
        |-_helpers.scss
        |-_media.scss
        |-_reset.scss
        |-_settings.scss
        |-_sprite.scss
    |-vendor/
    |-main.scss
|-favicon.ico
|-index.html
```
* Prepared [_helpers.scss](app/templates/sass/_helpers.scss) with mixins for vendor prefixes
* Optionally including useful js libraries
* Built-in preview server with browser-sync
* Automagically compile Sass
* Awesome image optimization
* Awesome create image sprites. Just put your png images in `img/sprite` and run `gulp sprite`. In [_sprite.scss](app/templates/sass/_sprite.scss) specify a path to your file with sprites.   
* Manually wire-up dependencies installed with [Bower](http://bower.io) 

*For more information on what this generator can do for you, take a look at the [gulp plugins](app/templates/_package.json) used in our `package.json`.*


## Getting Started

- Install: `npm install -g generator-mywebapp`
- Run: `yo mywebapp`
- Run `gulp` for preview

## Options

- `--skip-install`
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.
