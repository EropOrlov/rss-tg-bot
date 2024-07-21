import { Telegraf, Markup } from 'telegraf';

export const InlineKeyboard= {
  button_start: () => {
    return Markup.inlineKeyboard([[Markup.button.callback('Rss list', 'rssList')]]);
  },
  button_source: () => {
    return Markup.inlineKeyboard([[Markup.button.callback('Rss Reddit', 'rssReddit'),
      Markup.button.callback('Crypto X', 'rssCrypto'),
    ]]);
  },
  button_back: () => {
    return Markup.inlineKeyboard([[Markup.button.callback('Back', 'rssList')]]);
  },
}
