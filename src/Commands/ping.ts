import { Message, ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandBooleanOption, SlashCommandSubcommandBuilder } from "discord.js";
import { CommandType } from "../types/types";

export const Command: CommandType = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("get ping")
        .addBooleanOption(option =>
            option.setName("ephemeral")
                .setDescription("is visible")
                .setRequired(false))
    ,

    execute: async (command) => {

        //type 0 Message
        if (command.type === 0) {
            const message: Message = command;
            message.reply(`pong!\n ${message.client.ws.ping} ms`)

            //type 2 ChatInputCommandInteraction
        } else if (command.type === 2) {
            const interaction: ChatInputCommandInteraction = command;
            const ephemeral: boolean = interaction.options.getBoolean("ephemeral") || false;

            interaction.reply({
                content: `pong!\n ${interaction.client.ws.ping}ms`,
                ephemeral: ephemeral
            })
        }
    }
}