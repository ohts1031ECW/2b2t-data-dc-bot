import { Client, Events, REST, RESTPutAPIApplicationCommandsJSONBody, Routes } from "discord.js";
import { CommandType, CustomArgsType, EventTypeBase } from "../types/types";

export const Event:EventTypeBase = {
    name: Events.ClientReady,
    once: true,
    execute: async(client:Client,CustomArgs:CustomArgsType)=>{
        console.log("bot booted");
        console.log("logged in as: ",client.user?.tag);

        const Token:string = process.env.TOKEN || "";
        const ApplicationID:string = process.env.applicationID || "";
        const GuildID:string = process.env.GuildID || "";




        const rest = new REST().setToken(Token)
        const CommandData = [];
        for(const command of CustomArgs.Commands){
            CommandData.push(command[1].data);
            //console.log(command[1].data)
        }

        //register slash commands
        try {
            
            console.log(`registering ${CustomArgs.Commands.size} Slash commands`)
            const data = await rest.put(
                Routes.applicationGuildCommands(ApplicationID,GuildID),
                {body: CommandData}
            );

        } catch (error) {
            console.error(error)
        }
    }
}