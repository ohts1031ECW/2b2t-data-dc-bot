import { ChatInputCommandInteraction, Message, SlashCommandBuilder } from "discord.js";
import { CommandType } from "../types/types";

export const Command:CommandType = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("bot test command"),

    execute: async(command)=>{
        /*
        console.log("----------data----------");
        console.log(command);
        console.log("------------------------")
        */

        //type 0 Message
        if(command.type === 0){
            const message:Message = command;
            message.reply("this is message command")
            console.log("message: ",message);

            //type 2 ChatInputCommandInteraction
        } else if(command.type === 2){
            const interaction:ChatInputCommandInteraction = command;
            interaction.reply("this is interaction command")
            console.log("interaction: ", interaction);
        } 
    }
}