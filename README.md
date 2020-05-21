# rss to json

Util for parse ATOM and RSS feed resources and normalize them to JSON object.

[MEAN vs. MERN vs. MEVN - What’s the Difference](https://morioh.com/p/e010d0aaf16e)

[How to Creat a Task Management App Using Vue.js and a Node.js](https://morioh.com/p/1c085eda13b5)

## Install

```
npm install rss-to-json --save
```

## Example

```js

var Feed = require('rss-to-json');

Feed.load('https://morioh.com/feed', function(err, rss){
    console.log(JSON.stringify(rss, null, 3));
});

```
```js
// Promise
Feed.load('https://morioh.com/feed').then(rss => {
    console.log(JSON.stringify(rss, null, 3));
});
```

```js
// async await
var rss = await Feed.load('https://morioh.com/feed');
console.log(JSON.stringify(rss, null, 3));
```

## Result
```js
{
 "items": [
  {
         "title": "How To Set Kubernetes Ingress Controller on AWS",
         "id": "d72393d9ce74",
         "description": "This Kubernetes Ingress blog talks about routing external traffic to your services that are deployed on Kubernetes Cluster using Kops.\n\n#kubernetes #aws #devops",
         "url": "https://morioh.com/p/d72393d9ce74",
         "link": "https://morioh.com/p/d72393d9ce74",
         "author": "Edureka Fan",
         "created": 1588559460000,
         "category": [
            "kubernetes",
            "aws",
            "devops"
         ],
         "enclosures": [
            {
               "url": "https://i.morioh.com/200504/fd8ccfbc.jpg",
               "length": "0",
               "type": "image/jpeg"
            }
         ]
      },
      {
         "title": "How to Create Screen Recorder using Python",
         "id": "9ed8250b6eec",
         "description": "In this video, I will show you how to create a screen recorder using python packages used are:\n\n\n#python",
         "url": "https://morioh.com/p/9ed8250b6eec",
         "link": "https://morioh.com/p/9ed8250b6eec",
         "author": "Riyad Amin",
         "created": 1588559520000,
         "category": "python",
         "enclosures": [
            {
               "url": "https://i.ytimg.com/vi/wjfWa590EFQ/maxresdefault.jpg",
               "length": "0",
               "type": "image/jpeg"
            }
         ]
      },
      {
         "title": "Building Shopping Cart  with Redux",
         "id": "cc110dfc73bf",
         "description": "Redux is a popular JavaScript framework that provides a predictable state container for applications. Redux is based on a simplified version of Flux, a framework developed by Facebook. Unlike standard MVC frameworks, where data can flow between UI components and storage in both directions, Redux strictly allows data to flow in one direction only.\n\n\n#redux #javascript",
         "url": "https://morioh.com/p/cc110dfc73bf",
         "link": "https://morioh.com/p/cc110dfc73bf",
         "author": "Shriram Salunke",
         "created": 1588561204000,
         "category": [
            "redux",
            "javascript"
         ],
         "enclosures": [
            {
               "url": "https://i.ytimg.com/vi/731Ur2HGRBY/maxresdefault.jpg",
               "length": "0",
               "type": "image/jpeg"
            }
         ]
      },
      {
         "title": "State of Persistent Storage in K8s — A Benchmark",
         "id": "1ac0ce716e9c",
         "description": "his is an unscientific review of storage solutions for Kubernetes. This solves a problem where you need to provision a Persistent Volume using the nodes disk storage, while having a redundancy if a node is damaged or restarted. My motivation is that I´m migrating my company fleet of servers from multiple Bare Metal dedicated servers to a Kubernetes cluster.\n\n#kubernetes #devops",
         "url": "https://morioh.com/p/1ac0ce716e9c",
         "link": "https://morioh.com/p/1ac0ce716e9c",
         "author": "Poppy Cooke",
         "created": 1588562580000,
         "category": [
            "kubernetes",
            "devops"
         ],
         "enclosures": [
            {
               "url": "https://miro.medium.com/max/1200/1*fk3jrCZ6p-N2RndBih-J7A.png",
               "length": "0",
               "type": "image/jpeg"
            }
         ]
      },
      {
         "title": "Deep Face Recognition",
         "id": "ccfb713b267e",
         "description": "DeepFace is the facial recognition system used by Facebook for tagging images. It was proposed by researchers at Facebook AI Research (FAIR) at the 2014 IEEE Computer Vision and Pattern Recognition Conference (CVPR). The main problem the DeepFace has been able to solve is to build a model that is invariant to light effect, pose, facial expression, etc. and that’s why it is used in most of the Facebook’s face recognition tasks. In modern face recognition there are 4 steps: Detect, Align, Represent, Classify. \n\n\n#deeplearning #artificialintelligence #machinelearning",
         "url": "https://morioh.com/p/ccfb713b267e",
         "link": "https://morioh.com/p/ccfb713b267e",
         "author": "Samuel Tucker",
         "created": 1588563600000,
         "category": [
            "deep-learning",
            "artificial-intelligence",
            "machine-learning"
         ],
         "enclosures": [
            {
               "url": "https://i.morioh.com/200504/0c6cdda0.jpg",
               "length": "0",
               "type": "image/jpeg"
            }
         ]
      },
      {
         "title": "Understand the Concept of Dialog Boxes in JavaScript",
         "id": "cbfff8e8debc",
         "description": "In this post, you'll learn understand the concept of dialog boxes in JavaScript. There are three important dialog boxes in JavaScript. \n\n#javascript #es6",
         "url": "https://morioh.com/p/cbfff8e8debc",
         "link": "https://morioh.com/p/cbfff8e8debc",
         "author": "Kriza Educa",
         "created": 1588564020000,
         "category": [
            "javascript",
            "es6"
         ],
         "enclosures": [
            {
               "url": "https://i.morioh.com/200504/e5721e2f.jpg",
               "length": "0",
               "type": "image/jpeg"
            }
         ]
      },
      {
         "title": "Bye-bye Python. Hello Julia!",
         "id": "521b5c1ab200",
         "description": "Bye-bye Python. Hello Julia! As Python’s lifetime grinds to a halt, a hot new competitor is emerging. Why more and more programmers are adopting other languages — the top players being Julia, Go, and Rust. Julia is great for mathematical and technical tasks, while Go is awesome for modular programs, and Rust is the top choice for systems programming. Since data scientists and AI specialists deal with lots of mathematical problems, Julia is the winner for them. And even upon critical scrutiny, Julia has upsides that Python can’t beat.\n\n#python #machinelearning #datascience #julia",
         "url": "https://morioh.com/p/521b5c1ab200",
         "link": "https://morioh.com/p/521b5c1ab200",
         "author": "Charles Cooper",
         "created": 1588564500000,
         "category": [
            "python",
            "machine-learning",
            "data-science",
            "julia"
         ],
         "enclosures": [
            {
               "url": "https://miro.medium.com/max/1200/1*jJCYqdN8a0xJ3iYa9PFT-g.jpeg",
               "length": "0",
               "type": "image/jpeg"
            }
         ]
      }
 ],
 "title": "Social Network for Developers",
  "description": "Morioh is the place to create a Great Personal Brand, connect with Developers around the World and Grow your Career!",
  "link": "https://morioh.com",
  "category": [
      "nodejs",
      "angular",
      "javascript",
      "react",
      "python",
      "mongodb",
      "nosql",
      "bigdata",
      "marchine learning",
      "flutter",
      "swift",
      "react native",
      "asp.net",
      "typescript",
      "vue.js",
      "GraphQL",
      "bootstrap",
      "css3",
      "Django",
      "Laravel",
      "TensorFlow"
  ],
  "image": "https://i.imgur.com/CbCXhBe.png"
}

```
