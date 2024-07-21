import { InlineKeyboard } from "../buttons.js"

export function CommandHandler(bot){
  bot.start((ctx) => ctx.replyWithHTML('Welcome, to read rss open with button', InlineKeyboard.button_start()))
}