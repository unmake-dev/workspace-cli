import {InitCommand} from "./commands/init.command.ts";
import type {Command} from "commander";


export const commands: Command[] = [
    InitCommand
]

export function registerCommands(program: Command) {
    for (let command of commands) {
        program.addCommand(command)
    }
}