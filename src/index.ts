import { Client, Events, GatewayIntentBits, IntentsBitField } from "discord.js";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { EventTypeBase } from "./types";

dotenv.config()

//error handling
process.on("unhandledRejection", async (error) => {
    console.error(error);
})


const client: Client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions
    ]
})

//test
client.on(Events.ClientReady, (client: Client) => {
    console.log("logged in as: ", client.user?.tag)
})


//load Event Files
const EventFilePath: string = path.join(__dirname, "Events");
const EventFiles: string[] = fs.readdirSync(EventFilePath).filter(file => file.endsWith("ts") || file.endsWith("js"));
for (const File of EventFiles) {
    import(`${EventFilePath}/${File}`).then((rawdata) => {
        const Event: EventTypeBase = rawdata;

        if (Event.once) {
            client.once(Event.name, async (...args) => Event.execute(...args));
        } else {
            client.on(Event.name, async (...args) => Event.execute(...args))
        }
    })
}

console.log(EventFilePath)
console.log(EventFiles)

//client.login(process.env.TOKEN);