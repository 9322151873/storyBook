import React from "react";
import "./Checkbox.scss";
export interface props {
    label: string;
    checked: boolean;
    disabled: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Checkbox: (props: props) => React.JSX.Element;
