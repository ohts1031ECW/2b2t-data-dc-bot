import { Client, Collection, Interaction, SlashCommandBuilder } from "discord.js"

interface EventTypeBase {
    name: string,
    once?: boolean,
    execute: (...args: any) => void
}

interface CommandType {
    data: SlashCommandBuilder,
    execute: (...args: any) => void
}

interface CustomArgsType {
    prefix: string,
    Commands: Collection<string, CommandType>
    baseURL: object,
    client: Client

}
export {
    EventTypeBase,
    CommandType,
    CustomArgsType
}