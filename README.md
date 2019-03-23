Util for parse ATOM and RSS feed resources and normalize them to JSON object.
This is a copy of https://github.com/nasa8x/rss-to-json which does not seem to be maintained.

## Install

```js
npm install feed-to-json --save
```

## Example

```js

const Feed = require('rss-to-json');

Feed.load('http://feeds.bbci.co.uk/news/rss.xml', function(err, rss){
  console.log(rss);
});

```
## Result
```js

  {
  "items": [
    {
      "title": "Brexit: Theresa May at Brussels EU summit to urge short delay",
      "description": "The PM heads to an EU summit, hours after a speech telling the nation she was \"on their side\".",
      "link": "https://www.bbc.co.uk/news/uk-politics-47648565",
      "url": "https://www.bbc.co.uk/news/uk-politics-47648565",
      "created": 1553160845000,
      "media": {
        "thumbnail": [
          {
            "width": [
              "976"
            ],
            "height": [
              "549"
            ],
            "url": [
              "http://c.files.bbci.co.uk/1374B/production/_106119697_hi053074481_crop.jpg"
            ]
          }
        ]
      }
    },
    {
      "title": "Alesha MacPhail murder: Aaron Campbell finally confesses",
      "description": "Aaron Campbell was told that he would have to serve at least 27 years before he could apply for parole.",
      "link": "https://www.bbc.co.uk/news/uk-scotland-glasgow-west-47644414",
      "url": "https://www.bbc.co.uk/news/uk-scotland-glasgow-west-47644414",
      "created": 1553169749000,
      "media": {
        "thumbnail": [
          {
            "width": [
              "976"
            ],
            "height": [
              "549"
            ],
            "url": [
              "http://c.files.bbci.co.uk/E123/production/_105753675_aaron_campbell_police_scotland.jpg"
            ]
          }
        ]
      }
    },
    {
      "title": "Christchurch shootings: New Zealand to ban military style weapons",
      "description": "PM Jacinda Ardern says gun owners must hand in affected weapons, in a bid to prevent mass shootings.",
      "link": "https://www.bbc.co.uk/news/world-asia-47648549",
      "url": "https://www.bbc.co.uk/news/world-asia-47648549",
      "created": 1553164554000,
      "media": {
        "thumbnail": [
          {
            "width": [
              "976"
            ],
            "height": [
              "549"
            ],
            "url": [
              "http://c.files.bbci.co.uk/0317/production/_106119700_hi053027118_crop.jpg"
            ]
          }
        ]
      }
    },
    {
      "title": "Cyclone Idai: Flying over flooded Mozambique",
      "description": "The BBC's Fergal Keane assesses the devastation caused by Cyclone Idai in Mozambique.",
      "link": "https://www.bbc.co.uk/news/world-africa-47647993",
      "url": "https://www.bbc.co.uk/news/world-africa-47647993",
      "created": 1553132423000,
      "media": {
        "thumbnail": [
          {
            "width": [
              "1024"
            ],
            "height": [
              "576"
            ],
            "url": [
              "http://c.files.bbci.co.uk/332E/production/_106120131_p074505f_e.jpg"
            ]
          }
        ]
      }
    },
    {
      "title": "Birmingham mosque attacks probed by terrorism officers",
      "description": "Home Secretary Sajid Javid calls the vandalism in Birmingham \"deeply concerning, distressing and hateful\".",
      "link": "https://www.bbc.co.uk/news/uk-england-birmingham-47651350",
      "url": "https://www.bbc.co.uk/news/uk-england-birmingham-47651350",
      "created": 1553168802000,
      "media": {
        "thumbnail": [
          {
            "width": [
              "976"
            ],
            "height": [
              "549"
            ],
            "url": [
              "http://c.files.bbci.co.uk/12B7/production/_106119740_tv053082109.jpg"
            ]
          }
        ]
      }
    },
    {
      "title": "Mount Everest: Melting glaciers expose dead bodies",
      "description": "The remains of mountaineers who died on the world's highest peak are being exposed as its ice melts.",
      "link": "https://www.bbc.co.uk/news/science-environment-47638436",
      "url": "https://www.bbc.co.uk/news/science-environment-47638436",
      "created": 1553136631000,
      "media": {
        "thumbnail": [
          {
            "width": [
              "976"
            ],
            "height": [
              "549"
            ],
            "url": [
              "http://c.files.bbci.co.uk/1392A/production/_106107108_gettyimages-513452022.jpg"
            ]
          }
        ]
      }
    }
  }

```
