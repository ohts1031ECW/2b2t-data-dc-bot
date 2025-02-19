import { Client, Collection, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder} from "discord.js"

interface EventTypeBase {
    name: string,
    once?: boolean,
    execute: (...args: any) => void
}

interface CommandType {
    data: SlashCommandBuilder |  SlashCommandOptionsOnlyBuilder,
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