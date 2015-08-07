## basic-backbone-marionette-app
A basic application that demonstrates the use of Backbone.Marionette. In addition to it's primary focus of Backbone.Marionette, this app also show-cases the use of:

1. [Grunt](http://gruntjs.com/) - Build-time task automation
1. [Browserify](http://browserify.org/) - Client-side dependency management
1. [Handlebars](http://handlebarsjs.com/) - HTML templating framework

## Installation

### Npm
First, run `npm install`:

```bash
$ cd <root-of-app>
$ npm install
```

The `npm install` command pulls down all of the necessary node dependences. In addition, it also symlinks the `js` directory folders to eliminate the need for relative paths.

### Browserify
To generate the client dependencies, use the Grunt task runner:

```bash
$ cd <root-of-app>
$ grunt build
```

This will generate the `client.js` artifact under the `dist/js` directory. This artifact is used by the `index.html` page to run the Marionette application.