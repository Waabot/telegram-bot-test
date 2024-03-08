

// Define button interfaces
interface InlineKeyboardButton {
    buttonType: 'inlineKeyboard';
    text: string;
    payload: string;
}

interface UrlButton {
    buttonType: 'urlButton';
    text: string;
    url: string;
}

interface CallButton {
    buttonType: 'callButton';
    text: string;
    phoneNumber: string;
}

interface TextButton {
    buttonType: 'textButton';
    text: string;
}

interface ContactRequestButton {
    buttonType: 'contactRequest';
    text: string;
}

interface LocationRequestButton {
    buttonType: 'locationRequest';
    text: string;
}

interface PollRequestButton {
    buttonType: 'pollRequest';
    text: string;
}

interface UserRequestButton {
    buttonType: 'userRequest';
    text: string;
}

interface BotRequestButton {
    buttonType: 'botRequest';
    text: string;
}

interface GroupRequestButton {
    buttonType: 'groupRequest';
    text: string;
}

interface ChannelRequestButton {
    buttonType: 'channelRequest';
    text: string;
}

interface SwitchToChatButton {
    buttonType: 'switchToChat';
    text: string;
    userId: number;
}

interface SwitchToCurrentChatButton {
    buttonType: 'switchToCurrentChat';
    text: string;
}

interface GameButton {
    buttonType: 'game';
    text: string;
}

interface PayButton {
    buttonType: 'pay';
    text: string;
}

interface LoginButton {
    buttonType: 'login';
    text: string;
}

interface WebAppButton {
    buttonType: 'webApp';
    text: string;
}


// Define interface for intent
interface Intent {
    keyword: string;
    text: string;
    buttons: Button[];
}

// Define button type union
type Button = InlineKeyboardButton | UrlButton | CallButton | TextButton | ContactRequestButton | LocationRequestButton | PollRequestButton | UserRequestButton | BotRequestButton | GroupRequestButton | ChannelRequestButton | SwitchToChatButton | SwitchToCurrentChatButton | GameButton | PayButton | LoginButton | WebAppButton;

export { Intent, InlineKeyboardButton, UrlButton, CallButton, TextButton, ContactRequestButton, LocationRequestButton, PollRequestButton, UserRequestButton, BotRequestButton, GroupRequestButton, ChannelRequestButton, SwitchToChatButton, SwitchToCurrentChatButton, GameButton, PayButton, LoginButton, WebAppButton }