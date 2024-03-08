import { Telegraf, Context, Markup } from 'telegraf';
import { IntentInterface } from '../../../../config/intents';
import handleIntent from './handleIntent';
import data from './data/provider';
import { Intent } from './interfaces';


// Define the intent schema
// Define the intent schema
const intentSchema: Intent[] = data


export const intent = async (bot: Telegraf) => {
    // Register command handlers
    intentSchema.forEach((intent) => {
        bot.command(intent.keyword, async (ctx: Context) => {
            // @ts-ignore
            await handleIntent(ctx, intent);
        });
    });


    // Handle /start command
    bot.start(async (ctx: Context) => {
        // Provide a welcome message and display the main menu options
        // @ts-ignore
        await handleIntent(ctx, intentSchema[0]); // Use the first intent for the welcome message
    });

    // Register button callback handlers
    intentSchema.forEach(intent => {
        intent.buttons?.forEach(button => {
            if (button.buttonType === 'inlineKeyboard') {
                bot.action(button.payload!, async (ctx: Context) => {
                    const matchedIntent = intentSchema.find(item => item.keyword?.toLowerCase().split(',').includes(button.payload?.toLowerCase()));
                    if (matchedIntent) {
                        // @ts-ignore
                        await handleIntent(ctx, matchedIntent);
                    }
                });
            }
        });
    });




}