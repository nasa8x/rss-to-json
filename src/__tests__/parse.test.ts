import fetch from 'node-fetch';

import { parse } from '..';

test('fetches an RSS feed', async () => {
    const rss = await parse('https://blog.ethereum.org/feed.xml');

    expect(rss).toEqual({
        category: [],
        description: '',
        image: 'https://blog.ethereum.org/images/ef-blog-logo.svg',
        items: [
            {
                author: undefined,
                category: 'Ecosystem Support Program',
                content: undefined,
                created: 1686787200000,
                description:
                    "Kicking off the year with an addition to our Allocation Updates: we've included the contact details for grantees' projects, so that interested readers can reach out and get involved or learn more!  With that being said, read on to find out which projects received funding in Q1 in the...",
                enclosures: [
                    {
                        length: '0',
                        type: 'image/jpg',
                        url: 'https://storage.googleapis.com/ethereum-hackmd/upload_fd63dc334e72e1c2885cb7969adc1faf.jpg',
                    },
                ],
                id: undefined,
                link: 'https://blog.ethereum.org/en/2023/06/15/allocation-update-q1-23',
                media: {},
                published: 1686787200000,
                title: 'Allocation Update: Q1 2023',
            },
            {
                author: undefined,
                category: 'Research & Development',
                content: undefined,
                created: 1685577600000,
                description:
                    'TL;DR: The application deadline for the fourth cohort of EPF has been extended 📆 The EPF Team held a town hall & FAQ session - watch the recording here 👀 Submit your application here before June 18th 📝  Greetings, Ethereum community!  We are excited to announce that the...',
                enclosures: [
                    {
                        length: '0',
                        type: 'image/png',
                        url: 'https://storage.googleapis.com/ethereum-hackmd/upload_528af259f560c1e462768d8662448ebf.png',
                    },
                ],
                id: undefined,
                link: 'https://blog.ethereum.org/en/2023/06/01/ethereum-protocol-fellowship-fourth-apps-open',
                media: {},
                published: 1685577600000,
                title: 'Ethereum Protocol Fellowship - Fourth Cohort Applications Are Open!',
            },
            {
                author: undefined,
                category: 'Research & Development',
                content: undefined,
                created: 1683676800000,
                description:
                    'TL;DR: The EPF concluded its third cohort and is preparing for the fourth cohort. Applications will be open soon. Sign up here to get notified when they open.  The Ethereum Protocol Fellowship recently completed its third successful cohort in February 2023. Its completion marked 4 months of immersive learning,...',
                enclosures: [
                    {
                        length: '0',
                        type: 'image/jpg',
                        url: 'https://storage.googleapis.com/ethereum-hackmd/upload_80ba0aa49f5a37026942c45ea9f30e96.jpg',
                    },
                ],
                id: undefined,
                link: 'https://blog.ethereum.org/en/2023/05/10/ethereum-protocol-fellowship-third-recap',
                media: {},
                published: 1683676800000,
                title: 'Ethereum Protocol Fellowship: Third Cohort Recap',
            },
        ],
        link: 'https://blog.ethereum.org',
        title: 'Ethereum Blog',
    });
});

test('fetches with a custom Axios configuration', async () => {
    const transformResponse = jest.fn((data) => data);
    const rss = await parse('https://blog.ethereum.org/feed.xml', { transformResponse });

    expect(transformResponse).toHaveBeenCalled();
    expect(rss).toEqual({
        category: [],
        description: '',
        image: 'https://blog.ethereum.org/images/ef-blog-logo.svg',
        items: [
            {
                author: undefined,
                category: 'Ecosystem Support Program',
                content: undefined,
                created: 1686787200000,
                description:
                    "Kicking off the year with an addition to our Allocation Updates: we've included the contact details for grantees' projects, so that interested readers can reach out and get involved or learn more!  With that being said, read on to find out which projects received funding in Q1 in the...",
                enclosures: [
                    {
                        length: '0',
                        type: 'image/jpg',
                        url: 'https://storage.googleapis.com/ethereum-hackmd/upload_fd63dc334e72e1c2885cb7969adc1faf.jpg',
                    },
                ],
                id: undefined,
                link: 'https://blog.ethereum.org/en/2023/06/15/allocation-update-q1-23',
                media: {},
                published: 1686787200000,
                title: 'Allocation Update: Q1 2023',
            },
            {
                author: undefined,
                category: 'Research & Development',
                content: undefined,
                created: 1685577600000,
                description:
                    'TL;DR: The application deadline for the fourth cohort of EPF has been extended 📆 The EPF Team held a town hall & FAQ session - watch the recording here 👀 Submit your application here before June 18th 📝  Greetings, Ethereum community!  We are excited to announce that the...',
                enclosures: [
                    {
                        length: '0',
                        type: 'image/png',
                        url: 'https://storage.googleapis.com/ethereum-hackmd/upload_528af259f560c1e462768d8662448ebf.png',
                    },
                ],
                id: undefined,
                link: 'https://blog.ethereum.org/en/2023/06/01/ethereum-protocol-fellowship-fourth-apps-open',
                media: {},
                published: 1685577600000,
                title: 'Ethereum Protocol Fellowship - Fourth Cohort Applications Are Open!',
            },
            {
                author: undefined,
                category: 'Research & Development',
                content: undefined,
                created: 1683676800000,
                description:
                    'TL;DR: The EPF concluded its third cohort and is preparing for the fourth cohort. Applications will be open soon. Sign up here to get notified when they open.  The Ethereum Protocol Fellowship recently completed its third successful cohort in February 2023. Its completion marked 4 months of immersive learning,...',
                enclosures: [
                    {
                        length: '0',
                        type: 'image/jpg',
                        url: 'https://storage.googleapis.com/ethereum-hackmd/upload_80ba0aa49f5a37026942c45ea9f30e96.jpg',
                    },
                ],
                id: undefined,
                link: 'https://blog.ethereum.org/en/2023/05/10/ethereum-protocol-fellowship-third-recap',
                media: {},
                published: 1683676800000,
                title: 'Ethereum Protocol Fellowship: Third Cohort Recap',
            },
        ],
        link: 'https://blog.ethereum.org',
        title: 'Ethereum Blog',
    });
});

test('fetches with a custom fetcher', async () => {
    const client = jest.fn((url: string) =>
        fetch(url)
            .then((r) => r.text())
            .then((data) => ({ data }))
    );

    const rss = await parse('https://blog.ethereum.org/feed.xml', client);

    expect(client).toHaveBeenCalled();
    expect(rss).toEqual({
        category: [],
        description: '',
        image: 'https://blog.ethereum.org/images/ef-blog-logo.svg',
        items: [
            {
                author: undefined,
                category: 'Ecosystem Support Program',
                content: undefined,
                created: 1686787200000,
                description:
                    "Kicking off the year with an addition to our Allocation Updates: we've included the contact details for grantees' projects, so that interested readers can reach out and get involved or learn more!  With that being said, read on to find out which projects received funding in Q1 in the...",
                enclosures: [
                    {
                        length: '0',
                        type: 'image/jpg',
                        url: 'https://storage.googleapis.com/ethereum-hackmd/upload_fd63dc334e72e1c2885cb7969adc1faf.jpg',
                    },
                ],
                id: undefined,
                link: 'https://blog.ethereum.org/en/2023/06/15/allocation-update-q1-23',
                media: {},
                published: 1686787200000,
                title: 'Allocation Update: Q1 2023',
            },
            {
                author: undefined,
                category: 'Research & Development',
                content: undefined,
                created: 1685577600000,
                description:
                    'TL;DR: The application deadline for the fourth cohort of EPF has been extended 📆 The EPF Team held a town hall & FAQ session - watch the recording here 👀 Submit your application here before June 18th 📝  Greetings, Ethereum community!  We are excited to announce that the...',
                enclosures: [
                    {
                        length: '0',
                        type: 'image/png',
                        url: 'https://storage.googleapis.com/ethereum-hackmd/upload_528af259f560c1e462768d8662448ebf.png',
                    },
                ],
                id: undefined,
                link: 'https://blog.ethereum.org/en/2023/06/01/ethereum-protocol-fellowship-fourth-apps-open',
                media: {},
                published: 1685577600000,
                title: 'Ethereum Protocol Fellowship - Fourth Cohort Applications Are Open!',
            },
            {
                author: undefined,
                category: 'Research & Development',
                content: undefined,
                created: 1683676800000,
                description:
                    'TL;DR: The EPF concluded its third cohort and is preparing for the fourth cohort. Applications will be open soon. Sign up here to get notified when they open.  The Ethereum Protocol Fellowship recently completed its third successful cohort in February 2023. Its completion marked 4 months of immersive learning,...',
                enclosures: [
                    {
                        length: '0',
                        type: 'image/jpg',
                        url: 'https://storage.googleapis.com/ethereum-hackmd/upload_80ba0aa49f5a37026942c45ea9f30e96.jpg',
                    },
                ],
                id: undefined,
                link: 'https://blog.ethereum.org/en/2023/05/10/ethereum-protocol-fellowship-third-recap',
                media: {},
                published: 1683676800000,
                title: 'Ethereum Protocol Fellowship: Third Cohort Recap',
            },
        ],
        link: 'https://blog.ethereum.org',
        title: 'Ethereum Blog',
    });
});
