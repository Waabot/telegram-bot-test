import { Context, Markup } from 'telegraf';
import { IntentInterface } from '../../../../config/intents';

async function handleIntent(ctx: Context, intent: IntentInterface) {
    const buttons = intent.buttons;
    const inlineKeyboardButtons: any[] = [];
    const replyKeyboardButtons: any[] = [];

    // const buttonIndex=
    // Split buttons into rows for inline keyboard
    for (let i = 0; i < buttons.length; i += buttons[i].style || 3) {
        const rowButtons = buttons.slice(i, i + buttons[i].style || 3);
        inlineKeyboardButtons.push(rowButtons.map((button: any) => {
            switch (button.buttonType) {
                case 'inlineKeyboard':
                    return Markup.button.callback(button.text, button.payload);
                case 'urlButton':
                    return Markup.button.url(button.text, button.url);
                case 'callButton':
                    return Markup.button.contactRequest(button.text, true); //button.phoneNumber);
                // case 'switchToChat':
                //     return Markup.button.switchToChat(button.text, String(button.userId));
                // case 'switchToCurrentChat':
                //     return Markup.button.switchToCurrentChat(button.text);
                // case 'game':
                //     return Markup.button.game(button.text);
                // case 'pay':
                //     return Markup.button.pay(button.text);
                // case 'login':
                //     return Markup.button.login(button.text);
                // case 'webApp':
                //     return Markup.button.webApp(button.text);
                default:
                    return null;
            }
        }).filter(Boolean));
    }

    // Extract text buttons for reply keyboard
    buttons.forEach((button: any) => {
        if (button.buttonType === 'textButton') {
            replyKeyboardButtons.push(Markup.button.text(button.text));
        }
    });

    const inlineKeyboard = Markup.inlineKeyboard(inlineKeyboardButtons);//.extra();
    const replyKeyboard = Markup.keyboard(replyKeyboardButtons).oneTime().resize();//.extra();
    // Send message with both inline and reply keyboards
    await ctx.reply(intent.text, inlineKeyboard);
    if (replyKeyboardButtons.length > 0) {
        await ctx.reply("Choose an option:", replyKeyboard);
    }
}

export default handleIntent;