// Invoke 'strict' JavaScript mode
'use strict';
var util = require('util'),
  xml2js = require('xml2js'),
  axios = require('axios');


module.exports = {
  load: function (url, callback) {
    var $ = this;

    axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36 OPR/63.0.3368.75',
        'accept': 'text/html,application/xhtml+xml'
      }
    }).then(function (res) {
      var parser = new xml2js.Parser({ trim: false, normalize: true, mergeAttrs: true });     

      parser.parseString(res.data, function (err, result) {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          callback(null, $.parser(result));
        }

      });

    }).catch(function (error) {
      console.log(error);
      callback(error, null);
    });

  },
  parser: function (json) {
    var channel = json.rss.channel;
    var rss = { items: [] };
    if (util.isArray(json.rss.channel))
      channel = json.rss.channel[0];

    if (channel.title) {
      rss.title = channel.title[0];
    }
    if (channel.description) {
      rss.description = channel.description[0];
    }
    if (channel.link) {
      rss.url = channel.link[0];
    }

    // add rss.image via @dubyajaysmith
    if (channel.image) {
      rss.image = channel.image[0].url
    }

    if (!rss.image && channel["itunes:image"]) {
      rss.image = channel['itunes:image'][0].href
    }

    rss.image = rss.image && Array.isArray(rss.image) ? rss.image[0] : '';

    if (channel.item) {
      if (!util.isArray(channel.item)) {
        channel.item = [channel.item];
      }
      channel.item.forEach(function (val) {
        var obj = {};
        obj.title = !util.isNullOrUndefined(val.title) ? val.title[0] : '';
        obj.description = !util.isNullOrUndefined(val.description) ? val.description[0] : '';
        obj.url = obj.link = !util.isNullOrUndefined(val.link) ? val.link[0] : '';

        // Medium Support via @sstrubberg
        if (val["guid"]) {
          obj.guid = val["guid"][0];
        }
        if (val["category"]) {
          obj.category = val["category"][0];
        }
        if (val["dc:creator"]) {
          obj.dc_creator = val["dc:creator"][0];
        }
        if (val["pubDate"]) {
          obj.pubDate = val["pubDate"][0];
        }
        if (val["atom:updated"]) {
          obj.atom_updated = val["atom:updated"][0];
        }
        if (val["content:encoded"]) {
          obj.content_encoded = val["content:encoded"][0];
        }
        // End of Medium Support via @sstrubberg

        if (val['itunes:subtitle']) {
          obj.itunes_subtitle = val['itunes:subtitle'][0];
        }
        if (val['itunes:summary']) {
          obj.itunes_summary = val['itunes:summary'][0];
        }
        if (val['itunes:author']) {
          obj.itunes_author = val['itunes:author'][0];
        }
        if (val['itunes:explicit']) {
          obj.itunes_explicit = val['itunes:explicit'][0];
        }
        if (val['itunes:duration']) {
          obj.itunes_duration = val['itunes:duration'][0];
        }
        if (val['itunes:season']) {
          obj.itunes_season = val['itunes:season'][0];
        }
        if (val['itunes:episode']) {
          obj.itunes_episode = val['itunes:episode'][0];
        }
        if (val['itunes:episodeType']) {
          obj.itunes_episodeType = val['itunes:episodeType'][0];
        }
        if (val.pubDate) {
          //lets try basis js date parsing for now
          obj.created = Date.parse(val.pubDate[0]);
        }
        if (val['media:content']) {
          obj.media = val.media || {};
          obj.media.content = val['media:content'];
        }
        if (val['media:thumbnail']) {
          obj.media = val.media || {};
          obj.media.thumbnail = val['media:thumbnail'];
        }
        if (val.enclosure) {
          obj.enclosures = [];
          if (!util.isArray(val.enclosure))
            val.enclosure = [val.enclosure];
          val.enclosure.forEach(function (enclosure) {
            var enc = {};
            for (var x in enclosure) {
              enc[x] = enclosure[x][0];
            }
            obj.enclosures.push(enc);
          });

        }
        rss.items.push(obj);

      });

    }
    return rss;

  },
  read: function (url, callback) {
    return this.load(url, callback);
  }

};
