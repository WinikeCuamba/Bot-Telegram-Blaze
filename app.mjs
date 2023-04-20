import TelegramBot from 'node-telegram-bot-api'
import  { blaze, client } from './process/imports.mjs'

const Bot = new TelegramBot(BOT_TOKEN, {polling: true})
const BOT_TOKEN = process.env.TOKEN

Bot.onText(/\/start/,(msg) => {
    const opts = {
        reply_markup: JSON.stringify({
            reply_to_message_id: msg.message_id,
            resize_keyboard: true,
            keyboard: [
                [{text: 'Login'}, {callback_data: 'login'}],
              ]
        })
    }

    Bot.sendMessage(
        msg.chat.id,
        `Olá ${msg.from.first_name} meu nome é fullblaze\n` +
        `Eu sou um bot de apostas para Blaze\n`, opts
    )
    // Bot.on("login", (msg) => {

    // })
})

Bot.onText(/\/menu/, (msg) => {
    const opts = {
        reply_markup: JSON.stringify({
            reply_to_message_id: msg.message_id,
            resize_keyboard: true,
            keyboard: [
                [{text: 'Login'}, {callback_data: 'birthday'}],
              ]
        })
    }
})
