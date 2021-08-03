import request from 'request';
import cheerio from 'cheerio';

export const crawlerDataPart4 = async (req, res) => {
  request('https://vnexpress.net/phap-luat', (error, respone, html) => {
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

export const crawlerDataPart4NextStep = async (req, res) => {
  request('https://vnexpress.net/suc-khoe', (error, respone, html) => {
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
