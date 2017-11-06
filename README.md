

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
      {
        "title":"Raspberry Pi Zero/Gameboy Casemod",
        "description":"",
        "link":"http://codek.tv/v/ByMGIf1W",
        "url":"http://codek.tv/v/ByMGIf1W",
        "created":1461818890000,
        "enclosures":[
          {
            "url":"http://i.viralr.net/media/2016/03/30/c044a07ae3c47c32095766d0b4387e24.png",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Raspberry Pi 3: Fan and Cooling Tests",
        "description":"",
        "link":"http://codek.tv/v/B1hsSf1b",
        "url":"http://codek.tv/v/B1hsSf1b",
        "created":1461818787000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/5Ud-grj4Zl0/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Javascript Tutorial For Beginners With Examples #1 - Getting Started",
        "description":"",
        "link":"http://codek.tv/v/Hy4B4M1b",
        "url":"http://codek.tv/v/Hy4B4M1b",
        "created":1461818428000,
        "enclosures":[
          {
            "url":"http://i.viralr.net/media/2016/03/30/db65b813f3a6560eabcf340bd072f572.png",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"JavaScript ES6 Tutorial #1 - Introduction",
        "description":"",
        "link":"http://codek.tv/v/BkHIQGJW",
        "url":"http://codek.tv/v/BkHIQGJW",
        "created":1461818188000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/0Mp2kwE8xY0/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"File Upload Drag and Drop Tutorial HTML5 JavaScript PHP",
        "description":"",
        "link":"http://codek.tv/v/ByqszM1b",
        "url":"http://codek.tv/v/ByqszM1b",
        "created":1461818017000,
        "enclosures":[
          {
            "url":"http://i.viralr.net/media/2016/03/30/49febe392bea8dfa8abb73c4b1b2207f.png",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Django Tutorial for Beginners - 33 - Upload Files",
        "description":"",
        "link":"http://codek.tv/v/ByXWGzk-",
        "url":"http://codek.tv/v/ByXWGzk-",
        "created":1461817851000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/v5FWAxi5QqQ/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Angular 2 for Beginners - Tutorial 4 - SystemJS and main.ts",
        "description":"",
        "link":"http://codek.tv/v/B1aj-MJZ",
        "url":"http://codek.tv/v/B1aj-MJZ",
        "created":1461817764000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/xGmEKaBgS_8/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Angular 2 for Beginners - Tutorial 3 - Components",
        "description":"",
        "link":"http://codek.tv/v/HkzIbM1W",
        "url":"http://codek.tv/v/HkzIbM1W",
        "created":1461817673000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/h8surzS7LOo/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Angular 2 for Beginners - Tutorial 2 - Overview and Core Concepts",
        "description":"",
        "link":"http://codek.tv/v/H1YMbfy-",
        "url":"http://codek.tv/v/H1YMbfy-",
        "created":1461817616000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/vc9n0j6-D2U/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Perl Tutorial",
        "description":"",
        "link":"http://codek.tv/v/HJbRez1-",
        "url":"http://codek.tv/v/HJbRez1-",
        "created":1461817545000,
        "enclosures":[
          {
            "url":"http://i.viralr.net/media/2016/03/30/5f0f4a74b2a6608f5b43053cea4d4415.png",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Node js tutorial - Mean Stack - build Todo app",
        "description":"",
        "link":"http://codek.tv/v/B1A61G1b",
        "url":"http://codek.tv/v/B1A61G1b",
        "created":1461817285000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/AgUZJ96qF9U/sddefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Angular 2 for Beginners - Tutorial 1 - Getting Started",
        "description":"",
        "link":"http://codek.tv/v/SkqL1fJW",
        "url":"http://codek.tv/v/SkqL1fJW",
        "created":1461817170000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/hXfigUyeHaY/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"AngularJS Tutorial",
        "description":"",
        "link":"http://codek.tv/v/BJhz1zkW",
        "url":"http://codek.tv/v/BJhz1zkW",
        "created":1461817108000,
        "enclosures":[
          {
            "url":"http://i.viralr.net/media/2016/03/30/3d9ba35d34897e2fa7395aa238231c02.png",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Data Storage and Processing in the Cloud Demystified",
        "description":"",
        "link":"http://codek.tv/v/Bk991Woe",
        "url":"http://codek.tv/v/Bk991Woe",
        "created":1461550994000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/oHOIrf5hDtw/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Creating Virtual and Augmented Reality Apps バーチャルと拡張現実アプリの作成",
        "description":"",
        "link":"http://codek.tv/v/Hk4U6LQe",
        "url":"http://codek.tv/v/Hk4U6LQe",
        "created":1461050700000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/K94S3xIehiU/hqdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Learn Google Go Golang Programming for Beginners",
        "description":"",
        "link":"http://codek.tv/v/rJr_hUQl",
        "url":"http://codek.tv/v/rJr_hUQl",
        "created":1461050477000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/Uk6-D1hHwdQ/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"UIStackView in iOS 9 with Swift Tutorial | ESP 62 | iOS Development Tutorial with Duc Tran",
        "description":"",
        "link":"http://codek.tv/v/H1IqtmQg",
        "url":"http://codek.tv/v/H1IqtmQg",
        "created":1461037453000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/XqVWyA5PLwk/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"How to develop iOS Apps Overview | Swift 2 & Xcode 7",
        "description":"",
        "link":"http://codek.tv/v/HkcLKX7e",
        "url":"http://codek.tv/v/HkcLKX7e",
        "created":1461037394000,
        "enclosures":[
          {
            "url":"http://i.viralr.net/media/2016/03/30/4f113ce94293b2357edfa043e4c32665.png",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"How to Download Images from a URL | Swift Tutorial | iOS Development",
        "description":"",
        "link":"http://codek.tv/v/B18DAzme",
        "url":"http://codek.tv/v/B18DAzme",
        "created":1461034590000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/pIMAZL0mp0w/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Practical Machine Learning Tutorial with Python Intro p.1",
        "description":"",
        "link":"http://codek.tv/v/HkSkpzQx",
        "url":"http://codek.tv/v/HkSkpzQx",
        "created":1461034205000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/OGxgnH8y2NM/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Django Tutorial for Beginners - 1 - Installing Django",
        "description":"",
        "link":"http://codek.tv/v/HJoQjzQe",
        "url":"http://codek.tv/v/HJoQjzQe",
        "created":1461033763000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/qgGIqRFvFFk/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Sets in Python - Learn Python Programming (Computer Science)",
        "description":"",
        "link":"http://codek.tv/v/HJRFcGXx",
        "url":"http://codek.tv/v/HJRFcGXx",
        "created":1461033605000,
        "enclosures":[
          {
            "url":"http://i.viralr.net/media/2016/03/30/d371d665c5a362322a4b9edf419669d3.png",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Object Oriented JavaScript",
        "description":"",
        "link":"http://codek.tv/v/Hy81k6a",
        "url":"http://codek.tv/v/Hy81k6a",
        "created":1460682462000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/O8wwnhdkPE4/hqdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Game Changing Development Mission Animation",
        "description":"",
        "link":"http://codek.tv/v/H1tDQb9",
        "url":"http://codek.tv/v/H1tDQb9",
        "created":1460437857000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/tlZkIVSOWJ4/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"Making Your First Game: Basics - How To Start Your Game Development",
        "description":"",
        "link":"http://codek.tv/v/H1ieQZc",
        "url":"http://codek.tv/v/H1ieQZc",
        "created":1460437746000,
        "enclosures":[
          {
            "url":"https://i.ytimg.com/vi/z06QR-tz1_o/maxresdefault.jpg",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"JavaScript Video Tutorial Pt 1",
        "description":"",
        "link":"http://codek.tv/v/HktFfZc",
        "url":"http://codek.tv/v/HktFfZc",
        "created":1460437632000,
        "enclosures":[
          {
            "url":"http://i.viralr.net/media/2016/03/30/5db4c29670f6e67b1b1d4bb548ed4d48.png",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
      {
        "title":"JavaScript Tutorial",
        "description":"",
        "link":"http://codek.tv/v/B1f0W-9",
        "url":"http://codek.tv/v/B1f0W-9",
        "created":1460437450000,
        "enclosures":[
          {
            "url":"http://i.viralr.net/media/2016/03/30/1d9b5e6bef9da87c8d91edf7a7dedd58.png",
            "length":"0",
            "type":"image/jpeg"
          }
        ]
      },
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
