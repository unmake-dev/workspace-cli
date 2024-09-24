#!/usr/bin/env node

import {Command} from "commander";
import {parse, print} from "recast";

const program = new Command();

const code = `
function add(a: number, b: number): number {
  return a + b;
}
`;

const ast = parse(code, {
    parser: require("recast/parsers/typescript")
});

console.log(print(ast).code)

program
    .name('nestjs-workspace-cli')
    .description('CLI to some JavaScript string utilities')
    .version('0.0.1');

// registerCommands(program);

program.parse();