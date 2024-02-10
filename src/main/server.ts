import { Elysia } from "elysia";
import { setupApp } from "./config/app";
import * as fs from "node:fs";

const app = await setupApp()

const server = new Elysia()
    .use(app)
    .onError(() => console.log("ERRO!"))
    .listen(3030)

process.on('SIGINT', async () => {
    await server.stop()
    let date = Intl.DateTimeFormat("en-us").format(new Date());
    date = date.replaceAll("/", "-");
    console.log(`Server stopped at ${date}`)
    fs.cp("Logs.txt", `logs/${date}.txt`, () => { })
    fs.writeFile("Logs.txt", "", () => { })
});
