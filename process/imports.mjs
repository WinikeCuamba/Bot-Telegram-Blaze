import { Blaze }  from './bot/blaze.mjs'
import { Client } from './bot/client.mjs'


const client = new Client()
const blaze = new Blaze(client)

export { client, blaze }