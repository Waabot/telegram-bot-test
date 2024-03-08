export interface IntentInterface {
    title: string[];
    text: string;
    buttons?: any;// { inline_keyboard: { text: string, callback_data: string }[] };
}
const intents: IntentInterface[] = [
    {
        title: ["/start", "hi", "hello"],
        text: 'This is not the official Maestro Sniper Bot 🔫 deployed by @Mrbarnk. I can snipe call channels, presales and many more to come! Fire /sniper to summon the sniper panel.\n\nBy proceeding to use the bot, you confirm that you have read and agreed to our [Terms of Service](http://google.com/).'
    },
    {
        title: ["/sniper"],
        text: `To access the sniper bot, you must:
        
[1] Be a member of @Maestrobotclonechannel channel, you have to join the channel to use the bot.
[2] Be a member of @Mastroclonegroup group, you have to join the group to use the bot. (@MaestroBots is just a portal for the actual group, you have to join the actual group using the portal)
[3] Be a member of @MaestroBotsHubClone channel, you have to join the channel to use the bot.
        
Once you join all three, send the /sniper command again, it might take up to 1 minute for the access to be granted.`,
        buttons: {
            inline_keyboard: [
                [
                    { text: 'Maestro Sniper Bot', callback_data: 'bot' }
                ],
                [
                    { text: '⚙ Wallets', callback_data: 'wallet' },
                    { text: '⚙ Call Channels', callback_data: 'call_channels' }
                ],
                [
                    { text: '⚙ Presales', callback_data: 'presales' },
                    { text: '⚙ Copytrade', callback_data: 'copytrade' }
                ],
                [
                    { text: '⚙ Gode Mode', callback_data: 'godmode' }
                ],
                [
                    { text: '⭐Premium🌟', callback_data: 'premium' },
                    { text: 'ℹ FAQ', callback_data: 'faq' }
                ]
            ]
        },
    },
    {
        title: ["/panel"],
        text: `What would you like to do today?\n
Monitor
Active Trades: 0
Disabled Trades: 0

God Mode
Active God Modes: 0

Presale
Active Presales: 0`,
        buttons: {
            inline_keyboard: [
                [
                    { text: 'Maestro Sniper Bot', callback_data: 'bot' }
                ],
                [
                    { text: '⚙ Wallets', callback_data: 'wallet' },
                    { text: '⚙ Call Channels', callback_data: 'call_channels' }
                ],
                [
                    { text: '⚙ Presales', callback_data: 'presales' },
                    { text: '⚙ Copytrade', callback_data: 'copytrade' }
                ],
                [
                    { text: '⚙ Gode Mode', callback_data: 'godmode' }
                ],
                [
                    { text: '⭐Premium🌟', callback_data: 'premium' },
                    { text: 'ℹ FAQ', callback_data: 'faq' }
                ]
            ]
        },
    },
    {
        title: ["wallet"],
        text: `Select target chain:`,
        buttons: {
            inline_keyboard: [
                [
                    { text: 'Maestro Sniper Bot', callback_data: 'bot' }
                ],
                [
                    { text: 'Return', callback_data: 'return' },
                ],
                [
                    { text: 'BSC', callback_data: 'bsc' },
                    { text: 'ETH', callback_data: 'eth' },
                    { text: 'ADA', callback_data: 'ada' }
                ],
            ]
        },
    },
    {
        title: ["bsc", "eth", "ada"],
        text: `No settings detected.`,
        buttons: {
            inline_keyboard: [
                [
                    { text: 'Maestro Sniper Bot', callback_data: 'bot' }
                ],
                [
                    { text: 'Connect Wallet', callback_data: 'connect_wallet' },
                    { text: 'Return', callback_data: 'return' },
                ],
                [
                    { text: 'Generate Wallet', callback_data: 'generate_wallet' },
                ],
            ]
        },
    },
]

export default intents;