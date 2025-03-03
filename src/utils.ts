import { MojangAPI } from "./types/APIresponse";
import { CustomArgsType, executeArgsType } from "./types/types";

const RequestHeader = {
    "Content-Type": "application/json",
    //"user-agent": "ohts1031ECW/2b2t-data-dc-bot"
}


function UUIDconvert(input: string): string {
    const splited_uuid: string[] = [
        input.slice(0, 8),
        input.slice(8, 12),
        input.slice(12, 16),
        input.slice(16, 20),
        input.slice(20, 34)
    ]
    const OUT_UUID: string = splited_uuid.toString().replace(/,/g, "-");
    return OUT_UUID
}

async function fetch_get(URL: string) {
    const response: Response = await fetch(URL, {
        method: "GET",
        headers: RequestHeader
    })

    return {
        status: response.status,
        data: await response.json()
    }
}



function getArg(
    executeArg: executeArgsType,
    argname: string,
    //argtype: "string" |
    //    "boolean",
    index: number
):string {
    let Arg;
    //text command
    if (executeArg.type === 0) {
        Arg = executeArg.TextArgs[index];

        //interaction
    } else if (executeArg.type === 2) {
        Arg =  executeArg.interaction?.options.getString(argname);
    }
    return Arg as string;
}
export {
    UUIDconvert,
    fetch_get,
    getArg
}