import { Events, Interaction } from "discord.js";
import { CustomArgsType, EventTypeBase } from "../types/types";

export const Event:EventTypeBase = {
    name: Events.InteractionCreate,
    execute: async(interaction:Interaction,CustomArgs:CustomArgsType) =>{

        //Slash command
        if(interaction.isChatInputCommand()){
            const Command = CustomArgs.Commands.get(interaction.commandName);
            Command?.execute(interaction,CustomArgs);
        }
    }
}