import { Events } from "discord.js";
import { EventTypeBase } from "../types";

export const Event:EventTypeBase = {
    name: Events.ClientReady,
    once: true,
    execute: async()=>{

    }
}