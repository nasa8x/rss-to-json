import { XMLParser } from 'fast-xml-parser';
import axios, { AxiosRequestConfig } from 'axios';

export default async (url: string, config?: AxiosRequestConfig) => {
    if (!/(^http(s?):\/\/[^\s$.?#].[^\s]*)/i.test(url)) return null;

    const { data } = await axios(url, config);

    const xml = new XMLParser({
        attributeNamePrefix: '',
        textNodeName: '$text',
        ignoreAttributes: false,
    });

    const result = xml.parse(data);

    let channel = result.rss && result.rss.channel ? result.rss.channel : result.feed;
    if (Array.isArray(channel)) channel = channel[0];

    const rss = {
        title: channel.title ?? '',
        description: channel.description ?? '',
        link: channel.link && channel.link.href ? channel.link.href : channel.link,
        image: channel.image ? channel.image.url : channel['itunes:image'] ? channel['itunes:image'].href : '',
        category: channel.category || [],
        items: [],
    };

    let items = channel.item || channel.entry || [];
    if (items && !Array.isArray(items)) items = [items];

    for (let i = 0; i < items.length; i++) {
        const val = items[i];
        const media = {};

        const obj = {
            id: val.guid && val.guid.$text ? val.guid.$text : val.id,
            title: val.title && val.title.$text ? val.title.$text : val.title,
            description: val.summary && val.summary.$text ? val.summary.$text : val.description,
            link: val.link && val.link.href ? val.link.href : val.link,
            author: val.author && val.author.name ? val.author.name : val['dc:creator'],
            published: val.created ? Date.parse(val.created) : val.pubDate ? Date.parse(val.pubDate) : Date.now(),
            created: val.updated ? Date.parse(val.updated) : val.pubDate ? Date.parse(val.pubDate) : val.created ? Date.parse(val.created) : Date.now(),
            category: val.category || [],
            content: val.content && val.content.$text ? val.content.$text : val['content:encoded'],
            enclosures: val.enclosure ? (Array.isArray(val.enclosure) ? val.enclosure : [val.enclosure]) : [],
        };

        ['content:encoded', 'podcast:transcript', 'itunes:summary', 'itunes:author', 'itunes:explicit', 'itunes:duration', 'itunes:season', 'itunes:episode', 'itunes:episodeType', 'itunes:image'].forEach((s) => {
            if (val[s]) obj[s.replace(':', '_')] = val[s];
        });

        if (val['media:thumbnail']) {
            Object.assign(media, { thumbnail: val['media:thumbnail'] });
            obj.enclosures.push(val['media:thumbnail']);
        }

        if (val['media:content']) {
            Object.assign(media, { thumbnail: val['media:content'] });
            obj.enclosures.push(val['media:content']);
        }

        if (val['media:group']) {
            if (val['media:group']['media:title']) obj.title = val['media:group']['media:title'];

            if (val['media:group']['media:description']) obj.description = val['media:group']['media:description'];

            if (val['media:group']['media:thumbnail']) obj.enclosures.push(val['media:group']['media:thumbnail'].url);
        }

        Object.assign(obj, { media });

        rss.items.push(obj);
    }

    return rss;
};
