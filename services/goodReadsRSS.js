import Parser from 'rss-parser';

const parser = new Parser();

const getGoodreadsData = async () => {
    try {
      const response = await fetch('https://www.goodreads.com/user/updates_rss/104822881');
      const feedXML = await response.text();
      const feed = await parser.parseString(feedXML);
      return feed;
    } catch (error) {
        console.error(error);
        return {};
    }
  }

  module.exports = {
    getGoodreadsData
  };
  