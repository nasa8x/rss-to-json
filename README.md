# rss to json

Util for parse ATOM and RSS feed resources and normalize them to JSON object.


## Install

```
npm install rss-to-json --save
```

```
yarn add rss-to-json
```

## Example

```js

const { parse } = require('rss-to-json');
// async await
(async () => {

    var rss = await parse('https://blog.ethereum.org/feed.xml');

    console.log(JSON.stringify(rss, null, 3));

})();


```

```js
// Promise

parse('https://blog.ethereum.org/feed.xml').then(rss => {
    console.log(JSON.stringify(rss, null, 3));
});

```

## Result
```js
{
   "title": "Ethereum Blog",
   "description": "",
   "link": "https://blog.ethereum.org",
   "image": "",
   "category": [],
   "items": [
      {
         "title": "Road to Devcon Meetup and Event Grants",
         "description": "Community organizers are the glue that holds the Ethereum ecosystem together, and whether they’re leading large-scale events, local meetups, hackathons or seminars, we might all be wandering in the dark forest of the analog world without them. But where’s the fun in relying on chance encounters with kindred spirits identified...",
         "link": "https://blog.ethereum.org/2021/07/15/r2d-meetup-and-event-grants/",
         "published": 1626332400000,
         "created": 1626332400000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "London Mainnet Announcement",
         "description": "After a successful testnet deployement, the London upgrade is now ready to be activated on the Ethereum mainnet. It will go live on block 12 965 000, which is expected between August 3-5, 2021. Client Versions In order to be compatible with the London upgrade, node operators will need to...",
         "link": "https://blog.ethereum.org/2021/07/15/london-mainnet-announcement/",
         "published": 1626332400000,
         "created": 1626332400000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Allocation Update: Q1 2021",
         "description": "Happy July! Read on for the list of projects funded in Q1 of this year. But first: office hours are in session! Signups are open now through this Sunday (July 4) for teams or individuals to request a one-on-one call with the ESP team during the week of July 5-9....",
         "link": "https://blog.ethereum.org/2021/07/01/esp-allocation-update-q1-2021/",
         "published": 1625122800000,
         "created": 1625122800000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "London Testnets Announcement",
         "description": "The long-anticipated London upgrade is now ready for deployement on the Ethereum testnets! The upgrade will first go live on Ropsten, at block 10499401, which is expected to happen around June 24, 2021. This upgrade follows Berlin, which was activated only a few months ago on the Ethereum mainnet. By...",
         "link": "https://blog.ethereum.org/2021/06/18/london-testnets-announcement/",
         "published": 1623999600000,
         "created": 1623999600000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Grantee Roundup: May 2021",
         "description": "It’s always fun to hear about new grants as they’re awarded, but what happens after the announcement? In this series, we’ll check in on a couple of projects that are well underway - or already at the finish line. Read on to learn about some recent milestones and achievements by...",
         "link": "https://blog.ethereum.org/2021/06/02/esp-grantee-roundup-may-2021/",
         "published": 1622617200000,
         "created": 1622617200000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Finalized no. 26",
         "description": "the Ethereum consensus-layer - \n          Steady progress tl;dr Altair progress Rayonism wrapped up; The Merge progresses Altair progress Altair, the first planned upgrade of the Beacon Chain, continues to make steady progress. Last week, we released Beacon Chain spec v1.1.0-alpha.6 – Protostellar Evolution. While this is an alpha release, barring a security or practical engineering...",
         "link": "https://blog.ethereum.org/2021/05/25/finalized-no-26/",
         "published": 1621926000000,
         "created": 1621926000000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Quests along the Road to Devcon",
         "description": "Friends, As the Ethereum ecosystem continues to grow and mature at break-neck speeds, we continue to work hard on delivering an amazing Devcon 6. Though the timing is still unclear as to when we’ll all be able to reunite in Bogota, we want to keep our community involved along the...",
         "link": "https://blog.ethereum.org/2021/05/19/quests-along-the-road/",
         "published": 1621407600000,
         "created": 1621407600000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Dodging a bullet: Ethereum State Problems",
         "description": "With this blog post, the intention is to officially disclose a severe threat against the Ethereum platform, which was a clear and present danger up until the Berlin hardfork. State Let’s begin with some background on Ethereum and State. The Ethereum state consists of a patricia-merkle trie, a prefix-tree. This...",
         "link": "https://blog.ethereum.org/2021/05/18/eth_state_problems/",
         "published": 1621321200000,
         "created": 1621321200000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "A country's worth of power, no more!",
         "description": "TL;DR: Ethereum will use at least ~99.95% less energy post merge. Ethereum will be completing the transition to Proof-of-Stake in the upcoming months, which brings a myriad of improvements that have been theorized for years. But now that the Beacon chain has been running for a few months, we can...",
         "link": "https://blog.ethereum.org/2021/05/18/country-power-no-more/",
         "published": 1621321200000,
         "created": 1621321200000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Core Developer Apprenticeship Program",
         "description": "Get involved in developing at the protocol level! - \n          Have you have ever been interested in getting involved in the development of the core Ethereum protocols? If so, there is a new program to discuss that’s targeted at you. As part of an EF procotol-support initiative, I’m very excited to announce the “Core Developer Apprenticeship Program”. What to expect...",
         "link": "https://blog.ethereum.org/2021/05/13/core-dev-apprenticeship/",
         "published": 1620889200000,
         "created": 1620889200000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Ethereum for the Next Billion: Announcing the EF Fellowship Program",
         "description": "The progress being made in the Ethereum ecosystem lately is really inspiring. Whether you’re excited by the adoption of proof of stake (and a faster, more secure, greener Ethereum), the coming Merge and other big upgrades, or by some of the many applications and solutions that have the power to...",
         "link": "https://blog.ethereum.org/2021/05/07/ethereum-for-the-next-billion/",
         "published": 1620370800000,
         "created": 1620370800000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Grantee Roundup: April 2021",
         "description": "It’s always fun to hear about new grants as they’re awarded, but what happens after the announcement? In this series, we’ll check in on a couple of projects that are well underway - or already at the finish line. Read on to learn about some recent milestones and achievements by...",
         "link": "https://blog.ethereum.org/2021/05/03/esp-grantee-roundup-april-2021/",
         "published": 1620025200000,
         "created": 1620025200000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "EF-Supported Teams: Research &amp; Development Update",
         "description": "2021 Pt. 1 - \n          Friends, The year ahead will be filled with upgrades and big ideas from across the Ethereum ecosystem. Since our last Supported Teams post (which followed the launch of the beacon chain), the network has seen 3.8+ million Ether staked, and 120K+ active validators online across multiple clients. In recent days,...",
         "link": "https://blog.ethereum.org/2021/04/26/ef-supported-teams-research-and-development-update-2021-pt-1/",
         "published": 1619420400000,
         "created": 1619420400000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Finalized no. 25",
         "description": "the Ethereum consensus-layer - \n          tl;dr Rayonism☀️, hacking the Merge together blst security advisory Reminder! Beacon Chain security+testing RfP Rayonism☀️, hacking the Merge together This week, protolambda and others released plans for Rayonism, an ambitious month-long hack to create Merge devnets based on current specs with a stretch goal of adding sharding to these devnets...",
         "link": "https://blog.ethereum.org/2021/04/02/finalized-no-25/",
         "published": 1617346800000,
         "created": 1617346800000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Grantee Roundup: March 2021",
         "description": "It’s always fun to hear about new grants as they’re awarded, but what happens after the announcement? In this series, we’ll check in on projects that are well underway - or already at the finish line. Read on to learn about some recent milestones and achievements by grantees! Baseline The...",
         "link": "https://blog.ethereum.org/2021/04/01/esp-grantee-roundup-march-2021/",
         "published": 1617260400000,
         "created": 1617260400000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Finalized no. 24",
         "description": "the Ethereum consensus-layer - \n          tl;dr Altair prereleases: Stargazer and Half of ‘em just look like dots Security RfP Merge progress Altair pre-release is out Over the past week, beacon chain Altair pre-release specs – Stargazer v1.1.0-alpha.1 and Half of ‘em just look like dots v1.1.0-alpha.2 – were released. These represent the first feature complete...",
         "link": "https://blog.ethereum.org/2021/03/24/finalized-no-24/",
         "published": 1616569200000,
         "created": 1616569200000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Supporting Ethereum’s Client Ecosystem",
         "description": "Execution &amp; consensus layer funding updates - \n          With the arrival of the beacon chain in 2020, Ethereum today supports two types of clients: those focusing on the execution-layer (often referred to as eth1) and those powering the proof-of-stake consensus layer (aka eth2). As those running validators are well aware (since they run both client types), each serves...",
         "link": "https://blog.ethereum.org/2021/03/23/supporting-ethereums-client-ecosystem/",
         "published": 1616482800000,
         "created": 1616482800000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Allocation Update: Q4 2020",
         "description": "2021 is just getting started, but it’s already been quite an eventful year! We’ve got the list of Q4 funded projects below, but we also want to share some updates from the ESP team. We’re always looking for more ways to support the ecosystem as it grows and evolves, so...",
         "link": "https://blog.ethereum.org/2021/03/22/esp-allocation-update-q4-2020/",
         "published": 1616396400000,
         "created": 1616396400000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Finalized no. 23",
         "description": "the Ethereum consensus-layer - \n          tl;dr Finalized: rebranding the blog Upgrade your nodes! Finalized, rebranding the blog If you’ve read my recent writings or listened to me speak about Ethereum and this grand upgrade that’s in the works, you’ve perhaps noticed that I’m not only shying away from discussing “phases” (instead, referring to a series...",
         "link": "https://blog.ethereum.org/2021/03/11/finalized-no-23/",
         "published": 1615449600000,
         "created": 1615449600000,
         "category": [],
         "enclosures": [],
         "media": {}
      },
      {
         "title": "Ethereum Berlin Upgrade Announcement",
         "description": "TL;DR Berlin is ready to be deployed! We’re moving fast: the first testnet to upgrade, Ropsten, is scheduled to upgrade on March 10th. Mainnet is scheduled for April 15th. If you are running an Ethereum node, you should upgrade it to a Berlin-compatible version ASAP for testnets and before April...",
         "link": "https://blog.ethereum.org/2021/03/08/Ethereum-berlin-upgrade-announcement/",
         "published": 1615190400000,
         "created": 1615190400000,
         "category": [],
         "enclosures": [],
         "media": {}
      }
   ]
}

```

[Extract Title, Description, Keywords and Images from URLs with Node.js](https://morioh.com/p/d1eac65676af)

[An infinite scroll paginate plugin for Vue.js 3.0](https://morioh.com/p/7b9ca2c79570)

Contributing
------------

Please refer to each project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

Community
------------
Stay up to date on the development of Morioh UI and reach out to the community with these helpful resources.

Follow [@codek_tv](https://twitter.com/codek_tv) and [@im_a_developer](https://twitter.com/im_a_developer) on Twitter.

Follow [Morioh](https://www.facebook.com/moriohdotcom) and [Javascript Developers](https://www.facebook.com/javascript4u/) on FaceBook.

Join the official [Discord](https://discord.gg/sqxU6un) room: [https://discord.gg/sqxU6un](https://discord.gg/sqxU6un).