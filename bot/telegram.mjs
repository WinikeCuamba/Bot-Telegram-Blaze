class Telegram {
    constructor(client, bot, blaze)
    {
        this.client = client
        this.bot = bot
        this.blaze = blaze
    }

    start() {
        this.blaze.login()
    }

}