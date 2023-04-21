import puppeteer from "puppeteer"

export class Blaze { 
    constructor(client)
    {
        this.client = client
    }

    login(){
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            const URL = "https://google.com/";
            await page.goto(URL);
            await page.screenshot({path: "teste.png"});
        })();
    }

}
