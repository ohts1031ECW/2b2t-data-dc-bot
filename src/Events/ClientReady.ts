import { Client, Events } from "discord.js";
import { EventTypeBase } from "../types/types";

export const Event:EventTypeBase = {
    name: Events.ClientReady,
    once: true,
    execute: async(client:Client)=>{
        console.log("bot booted");
        console.log("logged in as: ",client.user?.tag);
    }
}