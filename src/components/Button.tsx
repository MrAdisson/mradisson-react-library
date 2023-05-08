import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { children, backgroundColor, color, style } = props;

    const _style: React.CSSProperties = style || {};

    // OVERIDE DEFAULTS
    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button style={_style} {...props}>
            {children}
        </button>
    );
};
