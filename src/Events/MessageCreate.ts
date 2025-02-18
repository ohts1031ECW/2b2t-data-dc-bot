import { Collection, Events, Message } from "discord.js";
import { CommandType, CustomArgsType, EventTypeBase } from "../types/types";

export const Event:EventTypeBase ={
    name: Events.MessageCreate,
    execute: async(message:Message,CustomArgs:CustomArgsType) =>{

        const TextArgs:string[] = message.content.slice(CustomArgs.prefix.length).trim().split(/ +|\n/g);
        const commandName:string = TextArgs.shift()!;


        //Text command handler
        const Command = CustomArgs.Commands.get(commandName);

        if(Command !== undefined){
            Command.execute(message)
        }

    },
}