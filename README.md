## basic-backbone-marionette-app
A basic application that demonstrates the use of Backbone.Marionette. In addition to it's primary focus of Backbone.Marionette, this app also show-cases the use of:

1. [browserify](http://browserify.org/) - Client-side dependency module loader
1. [bower](http://bower.io/) - Client-side package manager
1. [handlebars](http://handlebarsjs.com/) - HTML templating framework
1. [slinker](https://github.com/lewisdawson/slinker) - Symlinker for browserify and node dependencies--removes the need for relative paths
1. [grunt](http://gruntjs.com/) - Build-time task automation
    1. [grunt-browserify](https://github.com/jmreidy/grunt-browserify) - Manages the browserify dependency lifecycle through grunt
    1. [grunt-bower-concat](https://github.com/sapegin/grunt-bower-concat) - Concatentates Bower packages into a single dependency file
    1. [hbsfy](https://github.com/epeli/node-hbsfy) - Handlebars build-time template compiler

## Installation

### Npm
First, run `npm install`:

```bash
$ cd <root-of-app>
$ npm install
```

The `npm install` command pulls down all of the necessary node dependences. In addition, it also symlinks the `js` directory folders to eliminate the need for relative paths.

### Client Artifact Creation
To generate the client artifacts, use the Grunt task runner:

```bash
$ cd <root-of-app>
$ grunt build
```

This will generate the `clientScript/dist/client.js` artifact as well as the `clientStyle/dist/client.css` artifact. These artifacts are used by the `index.html` page to run the Marionette application.

### Troubleshooting
If you are having trouble getting the `npm install` to succeed, try deleting the `node_modules` directory.