interface EventTypeBase {
    name: string,
    once: boolean,
    execute: (...args:any) => void
}

export {
    EventTypeBase
}