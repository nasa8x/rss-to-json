

Util for parse ATOM and RSS feed resources and normalize them to JSON object.

[MEAN vs. MERN vs. MEVN - What’s the Difference](https://morioh.com/p/e010d0aaf16e)

[How to Creat a Task Management App Using Vue.js and a Node.js](https://morioh.com/p/1c085eda13b5)

## Install

```js
npm install rss-to-json --save
```

## Example

```js

var Feed = require('rss-to-json');

Feed.load('https://learnstartup.net/feed/', function(err, rss){
    console.log(rss);
});

```
## Result
```js

  {
 "items": [
  {
   "title": "Machine Learning with TensorFlow",
   "description": "Tackle common machine learning problems with Google’s TensorFlow library and build deployable solutions",
   "link": "http://learnstartup.net/p/B1D5Et0fYx",
   "url": "http://learnstartup.net/p/B1D5Et0fYx",
   "created": 1568687231000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1107990_4f5c_2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Machine Learning in JavaScript with TensorFlow.js",
   "description": "Master machine learning with JavaScript and TensorFlowJS. Add artificial intelligence to websites, Node.js and web apps!",
   "link": "http://learnstartup.net/p/cp_CimXBm",
   "url": "http://learnstartup.net/p/cp_CimXBm",
   "created": 1568643323000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/2447700_3fd0_2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Complete Guide to TensorFlow for Deep Learning with Python",
   "description": "Learn how to use Google's Deep Learning Framework - TensorFlow with Python! Solve problems with cutting edge techniques!",
   "link": "http://learnstartup.net/p/BJT8gGKsb",
   "url": "http://learnstartup.net/p/BJT8gGKsb",
   "created": 1568620313000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1326292_4dcf.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "TensorFlow for Machine Learning Solutions",
   "description": "Explore machine learning concepts using the latest numerical computing library – TensorFlow",
   "link": "http://learnstartup.net/p/BysmbBj9M",
   "url": "http://learnstartup.net/p/BysmbBj9M",
   "created": 1568617677000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1607266_072c_2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Machine Learning & Tensorflow - Google Cloud Approach",
   "description": "Tensors and TensorFlow",
   "link": "http://learnstartup.net/p/SJihxrs5M",
   "url": "http://learnstartup.net/p/SJihxrs5M",
   "created": 1568617009000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1594160_55a7_2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Machine Learning for Android Developer using Tensorflow lite",
   "description": "Learn Machine Learning and deploy machine learning models in Android Application using tensorflow lite",
   "link": "http://learnstartup.net/p/ChDBx7NZQ",
   "url": "http://learnstartup.net/p/ChDBx7NZQ",
   "created": 1568601963000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/2473538_87a9_2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Deep-Learning with The Tensorflow and Python Masterclass!",
   "description": "Build & Improve Apps driven by machine learning with data & models! Use Google's deep learning framework w/ Java & AI",
   "link": "http://learnstartup.net/p/nD9sySWdJ",
   "url": "http://learnstartup.net/p/nD9sySWdJ",
   "created": 1568601949000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/2466214_d78f.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "THE ULTIMATE TENSORFLOW 2.0 PRACTICAL COURSE",
   "description": "Master Tensorflow 2.0, Google’s most powerful Machine Learning Library, with 10 practical projects",
   "link": "http://learnstartup.net/p/SZKrMw3Jd",
   "url": "http://learnstartup.net/p/SZKrMw3Jd",
   "created": 1568601942000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/2517884_44cc_2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Data Science and Machine Learning with Python and Tensorflow",
   "description": "Create Apps using Machine learning and Data Science to Create Visual Diagrams and graphic bars with Python!",
   "link": "http://learnstartup.net/p/6NX2WfN5A",
   "url": "http://learnstartup.net/p/6NX2WfN5A",
   "created": 1568601929000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/2523718_8229.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Tensorflow Bootcamp For Data Science in Python",
   "description": "Complete Tensorflow Mastery For Machine Learning & Deep Learning in Python",
   "link": "http://learnstartup.net/p/8tNEsvql3",
   "url": "http://learnstartup.net/p/8tNEsvql3",
   "created": 1568549653000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/1776912_8b00_2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Machine Learning with Javascript",
   "description": "Master Machine Learning from scratch using Javascript and Tensorflow.JS with hands-on projects.",
   "link": "http://learnstartup.net/p/HL4Km9ZkT",
   "url": "http://learnstartup.net/p/HL4Km9ZkT",
   "created": 1568542387000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/1955654_2ed0.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Modern Deep Learning in Python",
   "description": "Build with modern libraries like Tensorflow, Theano, Keras, PyTorch, CNTK, MXNet. Train faster with GPU on AWS.",
   "link": "http://learnstartup.net/p/B1ooWtfYb",
   "url": "http://learnstartup.net/p/B1ooWtfYb",
   "created": 1568541799000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/772462_d385.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Bayesian Machine Learning in Python: A/B Testing",
   "description": "Data Science, Machine Learning, and Data Analytics Techniques for Marketing, Digital Media, Online Advertising, and More",
   "link": "http://learnstartup.net/p/HkriWtGYb",
   "url": "http://learnstartup.net/p/HkriWtGYb",
   "created": 1568541793000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/1011712_a062.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Machine Learning, Data Science and Deep Learning with Python",
   "description": "Complete hands-on machine learning tutorial with data science, Tensorflow, artificial intelligence, and neural networks",
   "link": "http://learnstartup.net/p/BkS5nEmZg",
   "url": "http://learnstartup.net/p/BkS5nEmZg",
   "created": 1568541457000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/671576_a272_4.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Python for Data Science and Machine Learning Bootcamp",
   "description": "Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!",
   "link": "http://learnstartup.net/p/BJzWmGFGg",
   "url": "http://learnstartup.net/p/BJzWmGFGg",
   "created": 1568540275000,
   "enclosures": [
    {
     "url": "https://i.udemycdn.com/course/750x422/903744_8eb2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Learning Computer Vision with Tensorflow",
   "description": "Exploit the power of TensorFlow to create powerful image processing applications",
   "link": "http://learnstartup.net/p/Sk-TN_Gtb",
   "url": "http://learnstartup.net/p/Sk-TN_Gtb",
   "created": 1568528313000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1314890_33c6_2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "TensorFlow 101: Introduction to Deep Learning",
   "description": "Ready to build the future with Deep Neural Networks? Stand on the shoulder of TensorFlow for Machine Learning.",
   "link": "http://learnstartup.net/p/r1l0yvGtW",
   "url": "http://learnstartup.net/p/r1l0yvGtW",
   "created": 1568516359000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1330246_257f_5.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Build and train a data model to recognize objects in images!",
   "description": "Make an image recognition model with TensorFlow & Python predictive modeling, regression analysis & machine learning!",
   "link": "http://learnstartup.net/p/-ILK-G_Dw",
   "url": "http://learnstartup.net/p/-ILK-G_Dw",
   "created": 1568516201000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1426102_cde1_3.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "A beginners guide for building neural networks in tensorflow",
   "description": "How to learn deep learning and neural networks in tensorflow from scratch. Tensorflow training for beginners.",
   "link": "http://learnstartup.net/p/pwBUWEFOR",
   "url": "http://learnstartup.net/p/pwBUWEFOR",
   "created": 1568516201000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1438048_d7db_3.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Deep Learning and NLP A-Z™: How to create a ChatBot",
   "description": "Learn the Theory and How to implement state of the art Deep Natural Language Processing models in Tensorflow and Python",
   "link": "http://learnstartup.net/p/wdJ9l1SIx",
   "url": "http://learnstartup.net/p/wdJ9l1SIx",
   "created": 1568516201000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1460764_a6f8.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Machine Learning and Data Science Essentials with Python & R",
   "description": "Master Machine Learning with Python, Tensorflow & R. Data Science is the most in-demand and Highest Paying Job of 2018",
   "link": "http://learnstartup.net/p/yxdg4LEhP",
   "url": "http://learnstartup.net/p/yxdg4LEhP",
   "created": 1568516095000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1471462_10f1.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "TensorFlow and the Google Cloud ML Engine for Deep Learning",
   "description": "CNNs, RNNs and other neural networks for unsupervised and supervised deep learning",
   "link": "http://learnstartup.net/p/PFis75NCJ",
   "url": "http://learnstartup.net/p/PFis75NCJ",
   "created": 1568516095000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1474682_cc04_2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Deep Learning: Advanced Computer Vision",
   "description": "Advanced Computer Vision and Convolutional Neural Networks in Tensorflow, Keras, and Python",
   "link": "http://learnstartup.net/p/GgoR4gKyz",
   "url": "http://learnstartup.net/p/GgoR4gKyz",
   "created": 1568516095000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1533864_a443.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Tensorflow for Beginners",
   "description": "A complete guide for building machine learning and deep learning solutions using Tensorflow",
   "link": "http://learnstartup.net/p/EZnt_ES_X",
   "url": "http://learnstartup.net/p/EZnt_ES_X",
   "created": 1568516095000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1583732_85fe.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Intro to TensorFlow - For iOS & Android",
   "description": "Learn artificial intelligence, machine learning & coding. Build projects! Explore Python, Java, PyCharm, databases, more",
   "link": "http://learnstartup.net/p/J7oG-usgP",
   "url": "http://learnstartup.net/p/J7oG-usgP",
   "created": 1568516095000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1595152_3910.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Mobile Machine Learning for Android: TensorFlow & Python",
   "description": "Use PyCharm, Java & Android Studio to make apps using artificial intelligence. Learn with hands-on projects & examples!",
   "link": "http://learnstartup.net/p/Zc36KVR37",
   "url": "http://learnstartup.net/p/Zc36KVR37",
   "created": 1568516095000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1597758_1252.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Deep Learning Project Building with Python and Keras",
   "description": "Learn to make Android Keras image recognition models! This epic course covers Android Studio, Java, TensorFlow and more",
   "link": "http://learnstartup.net/p/cPo3zdRLr",
   "url": "http://learnstartup.net/p/cPo3zdRLr",
   "created": 1568515912000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1620238_dad4.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "Make predictions with Python machine learning for apps",
   "description": "Leverage TensorFlow models to build & improve apps! Use Google's deep learning framework w/ Java & AI. Beginner-friendly",
   "link": "http://learnstartup.net/p/6j0p7bVwE",
   "url": "http://learnstartup.net/p/6j0p7bVwE",
   "created": 1568515912000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1622334_5faf.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "The Complete TensorFlow Masterclass: Machine Learning Models",
   "description": "A complete & comprehensive course in which you create a portfolio of apps driven by machine learning with data & models!",
   "link": "http://learnstartup.net/p/8vTep-sSu",
   "url": "http://learnstartup.net/p/8vTep-sSu",
   "created": 1568515912000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1631000_6729.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  },
  {
   "title": "The Stock Prediction & Math Functions with Data Bootcamp",
   "description": "Learn Python NumPy and predict the stock market with artificial intelligence and TensorFlow! Master core programming.",
   "link": "http://learnstartup.net/p/WnN2RIdVH",
   "url": "http://learnstartup.net/p/WnN2RIdVH",
   "created": 1568515912000,
   "enclosures": [
    {
     "url": "https://udemy-images.udemy.com/course/750x422/1652628_e3d4_2.jpg",
     "length": "0",
     "type": "image/jpeg"
    }
   ]
  }
 ],
 "title": "Learn Startup - Build a successful business and change the world",
 "description": "Learn Startup, starting a business, Mobile Development and Design with Node.js, Angular.js, React.js, Python, MongoDB, HTML5, CSS3, JavaScript, PHP, mobile app development, Responsive Web Design",
 "url": "http://github.com/dylang/node-rss",
 "image": ""
}


```
