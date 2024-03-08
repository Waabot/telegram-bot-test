import { message } from "telegraf/filters";
import "./bot";
import commands from "./config/commands";
import { findIntent, replyUser } from "./helper/botHelper";
import { botMiddleware } from "./helper/groupHelpert";
import History from "./helper/history";
import history from "./helper/history";
import bot from "./bot";
// bot
bot.telegram.setMyCommands(commands)
/**
 * Start
 */
// bot.start((ctx) => replyUser(ctx, findIntent("/start")))

/**
 * Text
 */
// bot.on(message('text'), async (ctx) => {
//     const chatId = ctx.update.message.chat.id;
//     const text = ctx.update.message.text;
//     const response = findIntent(text)
//     // console.log({ text, response })
//     const middlewareResponse = await botMiddleware(chatId, text, response)

//     replyUser(ctx, middlewareResponse.text, middlewareResponse.buttons)
// })

// // Listen for callback queries (button clicks)
// bot.on('callback_query', async (query) => {
//     try {

//         // @ts-ignore
//         const text = query.update.callback_query.data

//         const chatId = query.update.callback_query.message?.chat.id || 0;

//         const response = findIntent(text)
//         const middlewareResponse = await botMiddleware(chatId, text, response)


//         await history.addToHistory(chatId, middlewareResponse)
//         await bot.telegram.editMessageText(chatId, query.update.callback_query.message?.message_id, query.inlineMessageId, middlewareResponse.text, { reply_markup: middlewareResponse.buttons })
//         await query.answerCbQuery()
//     } catch (error: any) {
//         console.log(error.message)
//     }
// });
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
