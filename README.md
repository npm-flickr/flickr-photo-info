## flickr-photo-info

Get info of a photo on Flickr. Like all other [npm-flickr](http://github.com/npm-flickr) libraries, it works on both NodeJS and browsers.

## Install

```bash
$ npm install npm-flickr/flickr-photo-info
```

## Usage

```js
var client = require('flickr-client')({
  key: 'api-key'
});

var photo = require('flickr-photo-info')({
  key: 'api-key'
})

photo('14321741011', function (error, p) {

  p.id
  // => 98269877@N00

  p.name
  // => "crater lake"

  p.owner.username
  // => azerbike

  p.owner.name
  // => Azer Koçulu

  p.title
  // => "Crater Lake"

  p.description
  // => ""

  p.postTS
  // => 1401670228000

  p.takenTS
  // => 1400987281000

  p.url
  // => "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/"

  p.urls.original
  // => https:\/\/farm3.staticflickr.com\/2922\/14321741011_0ddc14584b_o.jpg

  p.format
  // => "jpg

  p.views
  // => 58

})
```

[flickr-client](http://github.com/npm-flickr/flickr-client) can be passed to avoid repeating auth options:

```js
var client = require('flickr-client')({
  key: 'api-key'
});

var photo = require('flickr-photo-info')(client)
```
