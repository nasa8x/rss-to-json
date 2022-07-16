// import { encrypt } from './src/index';

const { parse, Parse } = require('./dist');


(async () => {



    var rss = await parse('https://blog.ethereum.org/feed.xml');

    //    var rss = await parse('https://medium.com/feed/@extropy-io');

    console.log(JSON.stringify(rss, null, 3));

})();

// Parse('https://blog.ethereum.org/feed.xml').then(rss => {
//     console.log(JSON.stringify(rss, null, 3));
// })