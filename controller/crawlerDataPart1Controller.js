import request from 'request';
import cheerio from 'cheerio';

export const crawlerDataPart1 = async (req, res) => {
  request('https://vnexpress.net/', (error, respone, html) => {
    if ((!error, respone?.statusCode == 200)) {
      const $ = cheerio.load(html);
      const load = $('.article-topstory');
      let data_Result = [];
      load.each((index, item) => {
        const data = {
          title: $(item).find('.title-news').find('a').text(),
          href: $(item).find('.thumb-art').find('a').attr('href'),
          description: $(item).find('.description').find('a').text(),
          imageUrl: $(item).find('.thumb-art').find('img').attr('src'),
        };
        data_Result.push(data);
      });
      res.send(data_Result);
    } else {
      res.send({ error: true });
    }
  });
};

export const crawlerDataPart1SideBar = async (req, res) => {
  request('https://vnexpress.net/goc-nhin/', (error, respone, html) => {
    if ((!error, respone?.statusCode == 200)) {
      const $ = cheerio.load(html);
      const load = $('.item-news');
      let data_Result = [];
      load.each((index, item) => {
        if (index < 3) {
          const data = {
            title: $(item).find('.title-news').find('a').text(),
            href: $(item).find('.thumb-art').find('a').attr('href'),
            description: $(item).find('.description').find('a').text(),
            imageUrl: $(item).find('.thumb-art').find('img').attr('src'),
          };
          data_Result.push(data);
        }
      });
      res.send(data_Result);
    } else {
      res.send({ error: true });
    }
  });
};

// const getSideBarTopStory = () => {
//   return new Promise((reslove, reject) => {
//     request('https://vnexpress.net/goc-nhin/', (error, respone, html) => {
//       if ((!error, respone?.statusCode == 200)) {
//         const $ = cheerio.load(html);
//         const load = $('.item-news');
//         let data_Result = [];
//         load.each((index, item) => {
//           if (index < 3) {
//             const data = {
//               title: $(item).find('.title-news').find('a').text(),
//               href: $(item).find('.thumb-art').find('a').attr('href'),
//               description: $(item).find('.description').find('a').text(),
//               imageUrl: $(item).find('.thumb-art').find('img').attr('src'),
//             };
//             data_Result.push(data);
//           }
//         });
//         reslove(data_Result);
//       } else {
//         reject('Server error!');
//       }
//     });
//   });
// };

// const getTopStory = () => {
//   return new Promise((reslove) => {
//     request('https://vnexpress.net/', (error, respone, html) => {
//       if ((!error, respone.statusCode == 200)) {
//         const $ = cheerio.load(html);
//         const load = $('.article-topstory');
//         let data_Result = [];
//         load.each((index, item) => {
//           const data = {
//             title: $(item).find('.title-news').find('a').text(),
//             href: $(item).find('.thumb-art').find('a').attr('href'),
//             description: $(item).find('.description').find('a').text(),
//             imageUrl: $(item).find('.thumb-art').find('img').attr('src'),
//           };
//           data_Result.push(data);
//         });
//         reslove(data_Result);
//       }
//     });
//   });
// };
