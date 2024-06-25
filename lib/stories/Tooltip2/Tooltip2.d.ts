import React from "react";
import "./tooltip2.css";
interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type: "primary" | "secondary" | "danger" | "success";
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**k
     * Button contents
     */
    label: string;
    disabled: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Tooltip2: ({ type, size, backgroundColor, label, ...props }: ButtonProps) => React.JSX.Element;
export {};
