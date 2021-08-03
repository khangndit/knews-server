import request from 'request';
import cheerio from 'cheerio';

export const crawlerDataSlideShow = async (req, res) => {
  request('https://vnexpress.net/anh', (error, respone, html) => {
    if ((!error, respone?.statusCode == 200)) {
      const $ = cheerio.load(html);
      const load = $('.item-news');
      let data_Result = [];
      let idx = 0;
      load.each((index, item) => {
        const title = $(item).find('.title-news').find('a').text();
        const imageUrl = $(item).find('picture').find('img').attr('data-src');
        const href = $(item).find('.thumb-art').find('a').attr('href');
        if (title && imageUrl && href) {
          data_Result.push({
            title,
            imageUrl,
            href,
          });
        }
      });
      res.send(data_Result);
    } else {
      res.send({ error: true });
    }
  });
};
