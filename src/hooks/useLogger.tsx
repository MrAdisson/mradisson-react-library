//A LOGGER HOOK TO LOG THE STATE OF THE COMPONENTS

export type LogType = 'info' | 'warn' | 'error' | 'success';

export const useLogger = () => {
    const logger = {
        info: (args: any) => {
            console.log(`%c${new Date().toLocaleTimeString()}: [INFO] - `, 'color: #00a3cc', args);
        },
        warn: (args: any) => {
            console.log(`%c${new Date().toLocaleTimeString()}: [WARN] - `, 'color: #ffcc00', args);
        },
        error: (args: any) => {
            console.log(`%c${new Date().toLocaleTimeString()}: [ERROR] - `, 'color: #ff3300', args);
        },
        success: (args: any) => {
            console.log(`%c${new Date().toLocaleTimeString()}: [SUCCESS] - `, 'color: #00cc00', args);
        }
    };
    const log = (args: any, type?: LogType) => {
        return type ? logger[type](args) : logger.info(args);
    };
    return { log, logger };
};

// Path: src\hooks\useLogger.tsx
