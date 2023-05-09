//A LOGGER HOOK TO LOG THE STATE OF THE COMPONENTS

import { useEffect } from 'react';

export const useLogger = (componentName: string, props: any) => {
    useEffect(() => {
        console.log(`${componentName} PROPS: `, props);
    }, [props]);

    useEffect(() => {
        console.log(`${componentName} MOUNTED`);
        return () => {
            console.log(`${componentName} UNMOUNTED`);
        };
    }, []);

    return null;
};

// Path: src\hooks\useLogger.tsx
