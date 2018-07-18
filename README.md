

Util for parse ATOM and RSS feed resources and normalize them to JSON object.

## Install

```js
npm install rss-to-json --save
```

## Example

```js

var Feed = require('rss-to-json');

Feed.load('https://codek.tv/feed/', function(err, rss){
    console.log(rss);
});

```

## Command line

```shell
rss-to-json https://codek.tv/feed/
```

## Result
```js

  {
    "items":[
      {
        "title":"New Raspberry Pi Camera V2 Overview and Comparison",
        "description":"",
        "link":"http://codek.tv/v/rkoyPMJ-",
        "url":"http://codek.tv/v/rkoyPMJ-",
        "created":1461819107000,
        "enclosures":[
          {
            "url":"http://i.viralr.net/media/2016/03/30/3b314f65ed8f0def36825d3d1ab6561b.png",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Raspberry Pi 3: CPU Temperature Tests & Heatsink",
        "description":"",
        "link":"http://codek.tv/v/Hko_IzkZ",
        "url":"http://codek.tv/v/Hko_IzkZ",
        "created":1461818994000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/e6okZKRwnTQ/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
...
      {
        "title":"Thinking About Getting an Arduino? Watch This",
        "description":"",
        "link":"http://codek.tv/v/Hk9ppYO",
        "url":"http://codek.tv/v/Hk9ppYO",
        "created":1460342209000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/5F054MNB1QI/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      }
    ],
    "title":"Ultimate Training Academy Free for Developers",
    "description":"Ultimate Free Courses, Tutorials: Node js, Angular js, Javascript, Python, Php, Wordpress, Mongodb, Nosql, C#, Ember js, React js",
    "url":"http://codek.tv"
  }


```
