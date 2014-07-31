var createClient = require("flickr-client");
var generateURLs = require("flickr-generate-urls");
var client;

module.exports = setup;

function setup (options) {
  client = createClient(options);
  return photo;
}

function photo (id, callback) {
  client('photos.getInfo', { photo_id: id }, function (error, result) {
    if (error) return callback(error);

    var info = result.photo;

    return callback(undefined, {
      id: info.id,
      title: info.title._content,
      description: info.description._content,
      tags: info.tags.tag,
      format: info.originalformat,
      url: info.urls.url[0]._content,
      postTS: Number(info.dates.posted) * 1000,
      takenTS: Number(new Date(info.dates.taken)),
      updateTS: Number(info.dates.lastupdate) * 1000,
      views: Number(info.views),
      owner: {
        id: info.owner.nsid,
        username: info.owner.path_alias,
        name: info.owner.realname,
        url: "https://flickr.com/photos/" + info.owner.path_alias,
        icons: {
          small: "https://farm" + info.owner.iconfarm + ".staticflickr.com/"+ info.owner.iconserver +"/buddyicons/"+info.owner.nsid+".jpg",
          medium: "https://farm" + info.owner.iconfarm + ".staticflickr.com/"+ info.owner.iconserver +"/buddyicons/"+info.owner.nsid+"_r.jpg"
        }
      },
      urls: generateURLs({
        id: info.id,
        farm: info.farm,
        server: info.server,
        secret: info.secret,
        osecret: info.originalsecret,
        format: info.originalformat
      })
    });
  });
}
