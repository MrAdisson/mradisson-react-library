//A LOGGER HOOK TO LOG THE STATE OF THE COMPONENTS

import { useEffect } from 'react';

export const useLogger = () => {
    //GET CALLER COMPONENT INFORMATION DYNAMICALLY:
    const getComponentName = (component: any) => {
        return component.displayName || component.name || 'Component';
    };

    //LOG THE STATE OF THE COMPONENTS

    useEffect(() => {
        console.log(`%c${getComponentName(this)}: Mounted`, 'color: green');

        return () => {
            console.log(`%c${getComponentName(this)}: Unmounted`, 'color: red');
        };
    }, []);
};

// Path: src\hooks\useLogger.tsx
