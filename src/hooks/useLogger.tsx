//A LOGGER HOOK TO LOG THE STATE OF THE COMPONENTS

import { useEffect } from 'react';

export function useLogger(this: any) {
    console.log(this);
    useEffect(() => {
        console.log('COMPONENT MOUNTED');
        return () => {
            console.log('COMPONENT UNMOUNTED');
        };
    });
}

// Path: src\hooks\useLogger.tsx
