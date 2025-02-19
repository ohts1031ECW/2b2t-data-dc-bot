import { Message, SlashCommandBuilder } from "discord.js";
import { CommandType } from "../types/types";

export const Command:CommandType = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("bot test command"),

    execute: async(message:Message)=>{
        message.reply("pong")
    }
}