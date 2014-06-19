require('with-env')();

var test = require("prova");
var photo = require("./")({
  key: process.env.FLICKR_API_KEY
});

test('basic info', function (t) {
  photo('14321741011', function (error, craterlake) {
    t.plan(12);
    t.error(error);

    t.equal(craterlake.id, '14321741011');
    t.equal(craterlake.title, 'Crater Lake');

    t.deepEqual(craterlake.owner, {
      id: "98269877@N00",
      username: 'azer',
      name: 'Azer Koçulu',
      url: 'https://flickr.com/photos/azer',
      icons: {
        small: "https://farm3.staticflickr.com/2933/buddyicons/98269877@N00.jpg",
        medium: "https://farm3.staticflickr.com/2933/buddyicons/98269877@N00_r.jpg"
      }
    });

    t.equal(craterlake.title, 'Crater Lake');
    t.equal(craterlake.description, '');
    t.equal(craterlake.postTS, 1401670228000);
    t.equal(craterlake.takenTS, 1400987281000);
    t.equal(craterlake.updateTS, 1401697494000);
    t.equal(craterlake.url, "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/");
    t.equal(craterlake.format, "jpg");
    t.ok(craterlake.views > 50);
  });
});

test('urls', function (t) {
  photo('14321741011', function (error, craterlake) {
    t.plan(11);
    t.error(error);
    t.deepEqual(craterlake.urls.square, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_s.jpg");
    t.deepEqual(craterlake.urls.largeSquare, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_q.jpg");
    t.deepEqual(craterlake.urls.thumbnail, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_t.jpg");
    t.deepEqual(craterlake.urls.small, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_m.jpg");
    t.deepEqual(craterlake.urls.small320, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_n.jpg");
    t.deepEqual(craterlake.urls.medium, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62.jpg");
    t.deepEqual(craterlake.urls.medium640, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_z.jpg");
    t.deepEqual(craterlake.urls.medium800, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_c.jpg");
    t.deepEqual(craterlake.urls.large, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_b.jpg");
    t.deepEqual(craterlake.urls.original, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_0ddc14584b_o.jpg");
  });
});
