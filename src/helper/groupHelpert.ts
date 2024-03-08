import bot from "../bot";
import groups from "../config/groups";
import intents, { IntentInterface } from "../config/intents";
import { mainIntent } from "./botHelper";
import history from "./history";

const checkGroupPermissions = () => {

}

export const botMiddleware = async (chatId: number, message: string, reply: IntentInterface) => {
    let response = reply.text;
    let sendButton = true;
    switch (message) {
        case "/sniper":
            const g1 = await bot.telegram.getChatMember(groups[0], chatId).then(e => e.status != 'left').catch(e => false)
            const g2 = await bot.telegram.getChatMember(groups[1], chatId).then(e => e.status != 'left').catch(e => false)
            const g3 = await bot.telegram.getChatMember(groups[2], chatId).then(e => e.status != 'left').catch(e => false)
            // console.log({ group1Available, group1Available2, group1Available3, chatId, groups })

            response = response.replace('[1]', g1 ? '✅' : '❌')
            response = response.replace('[2]', g2 ? '✅' : '❌')
            response = response.replace('[3]', g3 ? '✅' : '❌')

            if (g1 && g2 && g3) {
                response = mainIntent?.text || '';
            } else {
                sendButton = false;
            }
            break;

        case "return":
            console.log(response, reply, await history.getHistory(chatId))

        default:
            break;
    }

    const resp = { ...reply, text: response }
    if (!sendButton) delete resp.buttons;
    return resp;
};
