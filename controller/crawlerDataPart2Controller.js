import request from 'request';
import cheerio from 'cheerio';

export const crawlerDataPart2 = async (req, res) => {
  request('https://vnexpress.net/', (error, respone, html) => {
    if ((!error, respone?.statusCode == 200)) {
      const $ = cheerio.load(html);
      const load = $('.item-news');
      let data_Result = [];
      let idx = 0;
      load.each((index, item) => {
        const title = $(item).find('.title-news').find('a').text();
        const href = $(item).find('.thumb-art').find('a').attr('href');
        const description = $(item).find('.description').find('a').text();
        const imageUrl = $(item)
          .find('.thumb-art')
          .find('img')
          .attr('data-src');
        if (title && href && description && imageUrl) {
          if (idx < 12) {
            data_Result.push({ title, href, description, imageUrl });
          }
          ++idx;
        }
      });
      res.send(data_Result);
    } else {
      res.send({ error: true });
    }
  });
};

export const crawlerDataPart2NextStep = async (req, res) => {
  request('https://vnexpress.net/the-gioi', (error, respone, html) => {
    if ((!error, respone?.statusCode == 200)) {
      const $ = cheerio.load(html);
      const load = $('.item-news');
      let data_Result = [];
      let idx = 0;
      load.each((index, item) => {
        const title = $(item).find('.title-news').find('a').text();
        const href = $(item).find('.thumb-art').find('a').attr('href');
        const description = $(item).find('.description').find('a').text();
        const imageUrl = $(item)
          .find('.thumb-art')
          .find('img')
          .attr('data-src');
        if (title && href && description && imageUrl) {
          if (idx < 12) {
            data_Result.push({ title, href, description, imageUrl });
          }
          ++idx;
        }
      });
      res.send(data_Result);
    } else {
      res.send({ error: true });
    }
  });
};
