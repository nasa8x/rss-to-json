import { rest } from 'msw';

export const handlers = [
    rest.get('https://blog.ethereum.org/feed.xml', (_, res, ctx) => {
        return res(
            ctx.status(200),

            ctx.text(`<?xml version="1.0" encoding="utf-8"?>
            <rss version="2.0">
                <channel>
                    <title>Ethereum Blog</title>
                    <link>https://blog.ethereum.org</link>
                    <description></description>
                    <lastBuildDate>Thu, 15 Jun 2023 14:58:24 GMT</lastBuildDate>
                    <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
                    <generator>https://github.com/jpmonette/feed</generator>
                    <image>
                        <title>Ethereum Blog</title>
                        <url>https://blog.ethereum.org/images/ef-blog-logo.svg</url>
                        <link>https://blog.ethereum.org</link>
                    </image>
                    <copyright>All rights reserved 2023</copyright>
                    <item>
                        <title><![CDATA[Allocation Update: Q1 2023]]></title>
                        <link>https://blog.ethereum.org/en/2023/06/15/allocation-update-q1-23</link>
                        <guid>https://blog.ethereum.org/en/2023/06/15/allocation-update-q1-23</guid>
                        <pubDate>Thu, 15 Jun 2023 00:00:00 GMT</pubDate>
                        <description><![CDATA[Kicking off the year with an addition to our Allocation Updates: we've included the contact details for grantees' projects, so that interested readers can reach out and get involved or learn more!  With that being said, read on to find out which projects received funding in Q1 in the...]]></description>
                        <category>Ecosystem Support Program</category>
                        <enclosure url="https://storage.googleapis.com/ethereum-hackmd/upload_fd63dc334e72e1c2885cb7969adc1faf.jpg" length="0" type="image/jpg"/>
                    </item>
                    <item>
                        <title><![CDATA[Ethereum Protocol Fellowship - Fourth Cohort Applications Are Open!]]></title>
                        <link>https://blog.ethereum.org/en/2023/06/01/ethereum-protocol-fellowship-fourth-apps-open</link>
                        <guid>https://blog.ethereum.org/en/2023/06/01/ethereum-protocol-fellowship-fourth-apps-open</guid>
                        <pubDate>Thu, 01 Jun 2023 00:00:00 GMT</pubDate>
                        <description><![CDATA[TL;DR: The application deadline for the fourth cohort of EPF has been extended 📆 The EPF Team held a town hall & FAQ session - watch the recording here 👀 Submit your application here before June 18th 📝  Greetings, Ethereum community!  We are excited to announce that the...]]></description>
                        <category>Research &amp; Development</category>
                        <enclosure url="https://storage.googleapis.com/ethereum-hackmd/upload_528af259f560c1e462768d8662448ebf.png" length="0" type="image/png"/>
                    </item>
                    <item>
                        <title><![CDATA[Ethereum Protocol Fellowship: Third Cohort Recap]]></title>
                        <link>https://blog.ethereum.org/en/2023/05/10/ethereum-protocol-fellowship-third-recap</link>
                        <guid>https://blog.ethereum.org/en/2023/05/10/ethereum-protocol-fellowship-third-recap</guid>
                        <pubDate>Wed, 10 May 2023 00:00:00 GMT</pubDate>
                        <description><![CDATA[TL;DR: The EPF concluded its third cohort and is preparing for the fourth cohort. Applications will be open soon. Sign up here to get notified when they open.  The Ethereum Protocol Fellowship recently completed its third successful cohort in February 2023. Its completion marked 4 months of immersive learning,...]]></description>
                        <category>Research &amp; Development</category>
                        <enclosure url="https://storage.googleapis.com/ethereum-hackmd/upload_80ba0aa49f5a37026942c45ea9f30e96.jpg" length="0" type="image/jpg"/>
                    </item>
                </channel>
            </rss>`)
        );
    }),
];
