//These imports is outside of the repository
import TelegramBot  from 'node-telegram-bot-api'
import { env } from './env/env.mts'

const BOT_TOKEN = env.TOKEN
const Bot = new TelegramBot(BOT_TOKEN, {polling: true})

Bot.onText(/\/start/,(msg) => {
    Bot.sendMessage(msg.chat.id, "Ola mundo")
})
