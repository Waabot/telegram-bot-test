import { Telegraf } from "telegraf";
import bot from "../../../../bot";
import { intent } from "./intent";

const banky =  (bot: Telegraf) => intent(bot).then(c => console.log('Intent connected!!'))

export default banky;