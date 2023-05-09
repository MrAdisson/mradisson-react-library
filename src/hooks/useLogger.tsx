//A LOGGER HOOK TO LOG THE STATE OF THE COMPONENTS

import chalk from 'chalk';

export type LogType = 'info' | 'warn' | 'error' | 'success';

export const useLogger = () => {
    const logger = {
        info: (args: any, origin?: string) =>
            console.log(chalk.grey(`[${new Date().toLocaleString()}]`), chalk.blue(origin ? `[${origin}]` : '[INFO]'), chalk.grey(':'), typeof args === 'string' ? chalk.blueBright(args) : args),
        warn: (args: any, origin?: string) =>
            console.log(chalk.grey(`[${new Date().toLocaleString()}]`), chalk.yellow(origin ? `[${origin}]` : '[WARN]'), chalk.grey(':'), typeof args === 'string' ? chalk.yellowBright(args) : args),

        error: (args: any, origin?: string) =>
            console.log(chalk.grey(`[${new Date().toLocaleString()}]`), chalk.red(origin ? `[${origin}]` : '[ERROR]'), chalk.grey(':'), typeof args === 'string' ? chalk.redBright(args) : args),
        success: (args: any, origin?: string) =>
            console.log(chalk.grey(`[${new Date().toLocaleString()}]`), chalk.green(origin ? `[${origin}]` : '[SUCCESS]'), chalk.grey(':'), typeof args === 'string' ? chalk.greenBright(args) : args)
    };

    const log = (args: any, type?: LogType) => {
        return type ? logger[type](args) : logger.info(args);
    };

    return { log, logger };
};

// Path: src\hooks\useLogger.tsx
