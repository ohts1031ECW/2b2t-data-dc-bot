import { ChatInputCommandInteraction, Client, Collection, Interaction, Message, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder} from "discord.js"

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
    baseURL: {
        "2b2t.vc": string,
        "mojangAPI": string,
        "mojangAPI-sub": string
    },
    //client: Client
}

interface executeArgsType {
    interaction?: ChatInputCommandInteraction,
    message?: Message,
    type: number,
    TextArgs: string[],
    CustomArgs: CustomArgsType
}


export {
    EventTypeBase,
    CommandType,
    CustomArgsType,
    executeArgsType
}