import { Client, Collection, Events, GatewayIntentBits, IntentsBitField, Partials } from "discord.js";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { CommandType, CustomArgsType, EventTypeBase } from "./types/types";

dotenv.config()

//error handling
process.on("unhandledRejection", async (error) => {
    console.error(error);
})


const client: Client = new Client({
    
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds
    ],
    partials: [
        Partials.Message
    ]
})


const CustomArgs:CustomArgsType = {
    prefix: "%",
    Commands:  new Collection(),
    client: client,
    baseURL: {
        "2b2t.vc": "https://api.2b2t.vc/",
        //"2b2t.dev": "https://api.2b2t.dev/" dead
    }
}



//load Event Files
const EventFilePath: string = path.join(__dirname, "Events");
const EventFiles: string[] = fs.readdirSync(EventFilePath).filter(file => file.endsWith("ts") || file.endsWith("js"));
for (const File of EventFiles) {
    import(`${EventFilePath}/${File}`).then((rawdata) => {
        const Event: EventTypeBase = rawdata.Event;
        console.log("Events loading")
        console.log(`${Event.name} was loaded.`);

        if (Event.once) {
            client.once(Event.name, async (...args) => Event.execute(...args,CustomArgs));
        } else {
            client.on(Event.name, async (...args) => Event.execute(...args,CustomArgs));
        }
    })
}



//load command
const CommandFilePath:string = path.join(__dirname,"Commands");
const CommandFiles:string[] = fs.readdirSync(CommandFilePath).filter( file => file.endsWith("ts") || file.endsWith("js"));
for(const File of CommandFiles){
    import(`${CommandFilePath}/${File}`).then((rawdata)=>{
        const Command:CommandType = rawdata.Command;
        CustomArgs.Commands.set(Command.data.name,Command);
        console.log("Commands loading")
        console.log(`${Command.data.name} was loaded`)
    })
}
client.login(process.env.TOKEN);