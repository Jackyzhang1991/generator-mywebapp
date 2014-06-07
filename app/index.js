'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var MywebappGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');

        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous Mywebapp generator!'));

        var prompts = [{
            name: 'webappName',
            message: 'What do you wanna call your webapp?'
        }];

        this.prompt(prompts, function(props) {
            this.webappName = props.webappName;

            done();
        }.bind(this));
    },

    app: function() {
        this.mkdir('app');
        this.mkdir('app/css');
        this.mkdir('app/sass/vendor');
        this.mkdir('app/js');
        this.mkdir('app/fonts');
        this.mkdir('app/img');

        //html
        this.copy('index.html', 'app/index.html');

        //sass
        this.copy('sass/_base.scss', 'app/sass/core/_base.scss');
        this.copy('sass/_settings.scss', 'app/sass/core/_settings.scss');
        this.copy('sass/_helpers.scss', 'app/sass/core/_helpers.scss');
        this.copy('sass/_media.scss', 'app/sass/core/_media.scss');
        this.copy('sass/_reset.scss', 'app/sass/core/_reset.scss');
        this.copy('sass/_sprite.scss', 'app/sass/core/_sprite.scss');
        this.copy('sass/main.scss', 'app/sass/main.scss');

        //js
        this.copy('js/ie8/placeholder-min.js', 'app/js/vendor/ie8/placeholder-min.js');
        this.copy('js/ie8/respond.min.js', 'app/js/vendor/ie8/respond.min.js');
        this.copy('js/ie8/jquery.backgroundSize.js', 'app/js/vendor/ie8/jquery.backgroundSize.js');

        this.write('app/js/main.js', '$(function (){\n\t\'use strict\';\n});');

        this.copy('favicon.ico', 'app/favicon.ico');
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
    },

    projectfiles: function() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('gitignore', '.gitignore');
        this.copy('.bowerrc', '.bowerrc');
        this.copy('gulpfile.js', 'gulpfile.js');
    }
});

module.exports = MywebappGenerator;