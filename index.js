import { Telegraf } from "telegraf";
import 'dotenv/config'
import { CommandHandler } from "./src/handlers/commandHandler.js";
import { CallbackHandler } from "./src/handlers/callbackHandler.js";

const bot = new Telegraf(process.env.BOT_TOKEN)
CommandHandler(bot)
CallbackHandler(bot)
bot.launch()