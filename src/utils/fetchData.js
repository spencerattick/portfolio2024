// src/utils/fetchData.js
import Parser from 'rss-parser';

const parser = new Parser();

export async function fetchMediumFeed(username) {
    try {
        const response = await fetch(`https://medium.com/feed/@${username}`);
        const feedXML = await response.text();
        const feed = await parser.parseString(feedXML);
        return feed.items;
    } catch (error) {
        console.error(error);
        return []; // Return empty array in case of error
    }
}
