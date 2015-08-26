/**
 * The configuration used for Grunt task automation.
 */
'use strict';

var path = require('path');

/**
 * The configuration for the `browserify` task.
 */
function browserify() {
    return {
        dist: {
            src: ['<%= config.client %>/{,*/}*.*', '!<%= config.clientDist %>/{,*/}*.*'],
            dest: '<%= config.clientDist %>/client.js'
        },
        options: {
            transform: ['hbsfy']
        }
    };
}

/**
 * The configuration for the `bower_concat` task.
 */
function bowerConcat() {
    console.log('called bowerConcat()');
    return {
        all: {
            dest: '<%= config.clientDist %>/bower-lib.js',
            cssDest: '<%= config.clientDist %>/bower.css',
            exclude: [
                'jquery'
            ],
            bowerOptions: {
                relative: false
            }
        }
    };
}

/**
 * The configuration for the `cssmin` task.
 */
function cssMin() {
    console.log('called cssMin()');
    return {
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1
        },
        target: {
            files: {
                '<%= config.clientDist %>/client.css': ['<%= config.client %>/**/*.css', '!<%= config.clientDist %>/**/*.css',
                                                        '<%= config.clientDist %>/bower.css']
            }
        }
    };
}

function watch() {
    return {
        files: ['<%= config.client %>/**/*', '!<%= config.clientDist %>/**/*'],
        tasks: ['buildQuick']
    };
}

/**
 * Executes a `bower install`.
 */
function bower() {
    var exec = require('child_process').exec,
        cb = this.async();

    console.log('Running bower install.');

    exec('./node_modules/bower/bin/bower install', {cwd: __dirname}, function(err, stdout, stderr) {
        console.log(stdout);
        cb();
    });
}

/**
 * The common configurations for all grunt tasks.
 */
function config() {
    var config = {};

    config.client = 'client';
    config.dist = 'dist';
    config.clientDist = path.join(config.client, config.dist);

    return config;
}

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        config: config(),
        bower_concat: bowerConcat(),
        browserify: browserify(),
        cssmin: cssMin(),
        watch: watch()
    });

    grunt.registerTask('bower', bower);

    grunt.registerTask('build', [
        'bower',
        'buildQuick'
    ]);

    grunt.registerTask('buildQuick', [
        'bower_concat',
        'cssmin',
        'browserify'
    ]);

};