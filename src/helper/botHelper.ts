import intents, { IntentInterface } from "../config/intents"

/**
 * main Intent
 */
export const mainIntent = intents.find(c => c.title.includes('/panel'))
/**
 * Found Intent
 * @param trigger 
 * @returns 
 */
export const findIntent = (trigger: string): IntentInterface => intents.find(i => i.title.includes(trigger)) || mainIntent || { title: [''], text: "Invalid command!" };

/**
 * Reply User that texted the bot
 * @param ctx 
 * @param message 
 * @returns 
 */
export const replyUser = (ctx: any, message: string, buttons = {}) => ctx.telegram.sendMessage(ctx.message.chat.id, message, { reply_markup: buttons })