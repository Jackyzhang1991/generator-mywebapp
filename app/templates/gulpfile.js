'use strict';
var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    wiredep         = require('wiredep').stream,
    prefix          = require('gulp-autoprefixer'),
    <% if (csspreprocessor==='less') { %>
    sourcemaps      = require('gulp-sourcemaps'),
    less            = require('gulp-less'), <% } %>
    <% if (csspreprocessor==='sass') { %>
    sass            = require('gulp-ruby-sass'), <% } %>
    spritesmith     = require('gulp.spritesmith'),
    rename          = require('gulp-rename'),
    imagemin        = require('gulp-imagemin');

gulp.task('sprite', function() {
    var spriteData = gulp.src('app/img/sprites/*.png').pipe(spritesmith({
        imgName: 'sprites.png',
        padding: 15,
        algorithm: 'binary-tree',
        <% if (csspreprocessor==='sass') { %>cssName: '_sprite.scss',
        cssFormat: 'scss'<% } %>
        <% if (csspreprocessor==='less') { %>cssName: 'sprite.less',
        cssFormat: 'less'<% } %>
    }));
    spriteData.img.pipe(gulp.dest('app/img'));
    <% if (csspreprocessor==='sass') { %>spriteData.css.pipe(gulp.dest('app/sass/core'));<% } %>
    <% if (csspreprocessor==='less') { %>spriteData.css.pipe(gulp.dest('app/less/core'));<% } %>
});

gulp.task('browser-sync', function() {
    browserSync.init(['app/*html', 'app/css/*.css', 'app/js/main.js'], {
        server: {
            baseDir: 'app/'
        }
    });
});

<% if (csspreprocessor==='sass') { %>
gulp.task('sass', function() {
    gulp.src('app/sass/main.scss')
        .pipe(sass({
            style: 'expended',
            sourcemap: true
        }).on('error', function(er){
                console.log(er.message);
            }))
        .pipe(gulp.dest('app/css'));
});<% } %>

<% if (csspreprocessor==='less') { %>
gulp.task('less', function () {
    gulp.src('app/less/main.less')
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function(er){
                console.log(er.message);
            }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'));
});<% } %>

gulp.task('wiredep', function() {
    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'app/js/vendor',
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('autoprefixer', function() {
    gulp.src('app/css/main.css')
        .pipe(prefix('last 2 version', 'ie >= 8', {
            cascade: true
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('imagemin', function() {
    return gulp.src('app/img/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('app/img'));
});

gulp.task('default', [<% if (csspreprocessor==='sass') { %>'sass'<% } %><% if (csspreprocessor==='less') { %>'less'<% } %>, 'browser-sync'], function() {
    <% if (csspreprocessor==='sass') { %>gulp.watch('app/sass/**/*.scss', ['sass']);<% } %>
    <% if (csspreprocessor==='less') { %>gulp.watch('app/less/**/*.less', ['less']);<% } %>
});