import { Telegraf } from "telegraf";
import { message } from "telegraf/filters"
import intents from "./config/intents";
import { findIntent, replyUser } from "./helper/botHelper";
import commands from "./config/commands";
import banky from "./modules/chatbot/plugins/banky";
// import "./modules/chatbot/plugins/banky/index";
require("dotenv/config")

/**
 * 
 */
const bot = new Telegraf(process.env.BOT_TOKEN || "")

banky(bot)
/**
 * 
 */
bot.launch().then(c => console.log('Bot Launched!')).catch(console.error)

export default bot;