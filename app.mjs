//Import is outside of the repository
import { info as env } from './env/env.mjs'
import TelegramBot  from 'node-telegram-bot-api';


// The token is restricted you nide to get a token yourself 
const BOT_TOKEN = env.TOKEN
const bot = new TelegramBot( BOT_TOKEN, { polling: true } )

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, \n Meu nome e ChadNano e eu sou um bot \n muito divertido ;) \n Vamos nos divertir muito juntos brincando \n \nDigite /menu para as opcoes`)
})

bot.onText(/\/menu/, (msg) => {
  bot.sendMessage(msg.chat.id, `/quemSouEu -> Nome do bot \n/quemEoUsuario -> Nome do usuario \n/quemEmeuCriador -> Nome do criador do bot \n/jogo -> Jogo X/0`)
})

bot.onText(/\/quemSouEu/, (msg) => {
  bot.sendMessage(msg.chat.id, `O meu nome e ChadBot ;)`) 
})

bot.onText(/\/quemEoUsuario/, (msg) => {
  bot.sendMessage(msg.chat.id, `O nome do usuario e ${msg.from.first_name}`)
})

bot.onText(/\/quemEmeuCriador/, (msg) => {
  bot.sendMessage(msg.chat.id, `O meu criador e o WINIKE CUAMBA`)
})

bot.onText(/\/jogo/, (msg => {
  bot.sendMessage(msg.chat.id, `O jogo ainda esta em fase de desenvolvimento`)
}))
