# Minami

Funny theme for JSDoc 3.

Fork from [Minami](https://github.com/nijikokun/minami).

<!-- ![Minami Screenshot](http://i.imgur.com/rPCIFqT.png) -->


## Uses

- [the Taffy Database library](http://taffydb.com/)
- [Underscore Template library](http://underscorejs.org/#template)
- [Montserrat](https://fonts.google.com/specimen/Montserrat) & Helvetica Neue


## Install

```bash
$ npm install --save-dev jsdoc-ilafolt
```


## Usage

Clone repository to your designated `jsdoc` template directory, then:

```bash
$ jsdoc entry-file.js -t path/to/jsdoc-ilafolt
```


### Node.js Dependency

In your projects `package.json` file add a generate script:

```json
"scripts": {
  "generate-docs": "node_modules/.bin/jsdoc --configure .jsdoc.json --verbose"
}
```

In your `.jsdoc.json` file, add a template option.

```json
"opts": {
  "template": "node_modules/jsdoc-ilafolt"
}
```


### Example JSDoc Config

```json
{
    "templates": {
        "title": "ilafolt",
        "navigates": [
            {
                "text": "Text",
                "url": "your/url",
                "_blank": true
            }
        ]
    }
}
```

