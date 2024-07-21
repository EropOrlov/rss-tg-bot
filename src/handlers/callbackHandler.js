import Parser from 'rss-parser';
import { InlineKeyboard } from '../buttons.js';

export function CallbackHandler(bot) {
  bot.on('callback_query', async (ctx) => {
    const { callbackQuery } = ctx;
    const queryData = callbackQuery.data;
    if (queryData === 'rssList') {
      await ctx.editMessageText(
        'Pick rss parser',
        InlineKeyboard.button_source()
      );
    }
    if (queryData === 'rssReddit') {
      const parser = new Parser();
      const feed = await parser.parseURL('https://www.reddit.com/.rss');
      const news = feed.items.map((item, index) => {
        if (index < 10) {
          return `${item.title} : ${item.link}`;
        }
      });
      await ctx.editMessageText(
        `Reddit news\n${news.join('\n\n')}`,
        InlineKeyboard.button_back()
      );
    }
    if(queryData === 'rssCrypto'){
      const parser = new Parser();
      const feed = await parser.parseURL('https://rss.app/feeds/7tV8hTJvvCDAHpO4.xml');
      const news = feed.items.map((item, index) => {
        if (index < 5) {
          return `${item.title} : ${item.link}`;
        }
      });
      await ctx.editMessageText(
        `${news.join('\n\n')}`,
        InlineKeyboard.button_back()
      );
      
    }
  });
}
