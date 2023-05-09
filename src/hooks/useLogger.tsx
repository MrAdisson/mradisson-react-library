//A LOGGER HOOK TO LOG THE STATE OF THE COMPONENTS

import { useEffect } from 'react';

export const useLogger = (component: () => JSX.Element) => {
    const { name } = component;
    useEffect(() => {
        console.log(`%c${name} - COMPONENT MOUNTED`, 'color: green');
        return () => {
            console.log(`%c${name} - COMPONENT UNMOUNTED`, 'color: green');
        };
    });
};

// Path: src\hooks\useLogger.tsx
