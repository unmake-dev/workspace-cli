import {writeFileSync} from "fs";
import {stripIndents} from "common-tags";
import {confirm, input} from "@inquirer/prompts";
import chalk from "chalk";
import {Command} from "commander";
import ora from "ora";


export const InitCommand = new Command()
    .name('init')
    .description('Init project')
    .action(async () => {
        const spinner = ora('Loading unicorns').start();

        setTimeout(() => {
            spinner.color = 'yellow';
            spinner.text = 'Loading rainbows';
        }, 1000);
        const shouldInit = await confirm({message: 'Do you want to initialize the project?'});
        if (shouldInit) {
            const projectName = await input({message: 'Enter the project name'});
            const initialData = {
                projectName: projectName,
                lockVersion: '0.0.1',
            };
            const dockerfileContent = stripIndents`
                FROM node:22-alpine AS base
                
                WORKDIR /app
                
                RUN npm install -g pnpm
                
                COPY package*.json ./
                
                RUN pnpm install
            `;
            writeFileSync('Dockerfile', dockerfileContent.trim());
            writeFileSync('unmake.lock.json', JSON.stringify(initialData, null, 2));
            console.log(chalk.blue('Project initialized and unmake.lock.json file created.'));
        } else {
            console.log('Project initialization cancelled.');
        }
    })