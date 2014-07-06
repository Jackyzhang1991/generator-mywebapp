'use strict';
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sprite: {
            all: {
                src: 'app/img/sprites/*.png',
                destImg: 'app/img/sprites.png',
                <% if (csspreprocessor==='less') { %>
                destCSS: 'app/less/core/sprite.less',
                cssFormat: 'less', <% } %>
                <% if (csspreprocessor==='sass') { %>
                destCSS: 'app/sass/core/_sprite.scss',
                cssFormat: 'scss', <% } %>
                padding: 15,
                algorithm: 'binary-tree',
            }
        },
        <% if (csspreprocessor==='sass') { %>
        sass: {
          dev: {
            options: {
              style: 'expanded',
              sourcemap: true
            },
            files: {
              'app/css/main.css': 'app/sass/main.scss'
            }
          }
        }, <% } %>
        <% if (csspreprocessor==='less') { %>
        less: {
            options: {
                expand: true,
                sourceMap: true
            },
            dev: {
                files: {
                    'app/css/main.css': ['app/less/main.less']
                }
            }
        }, <% } %>
        watch: {
            gruntfile: {
                files: 'Gruntfile.js'
            },
            <% if (csspreprocessor==='less') { %>
            less: {
                files: ['app/less/**/*.less'],
                tasks: ['less']
            } <% } %>
            <% if (csspreprocessor==='sass') { %>
            sass: {
                files: ['app/sass/**/*.scss'],
                tasks: ['sass']
            } <% } %>
        },
        browserSync: {
            files: {
                src: ['app/*.html', 'app/css/*.css', 'app/js/main.js']
            },
            options: {
                watchTask: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                },
                server: {
                    baseDir: 'app'
                }
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', [<% if (csspreprocessor==='less') { %>'less'<% } %><% if (csspreprocessor==='sass') { %>'sass'<% } %>, 'browserSync', 'watch']);
};