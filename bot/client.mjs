import { Blaze } from "./blaze.mjs"

export class Client {
    constructor(nome, email) {
        this.nome = nome 
        this.email = email 
    }
}
const client = new Client("winike", "winikecuamba.github@gmail.com")
const blaze = new Blaze(client)
blaze.login()
