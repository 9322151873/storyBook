import React from "react";
import "./Radio.css";
export interface Props {
    label: string;
    disabled: boolean;
    checked: boolean;
    value: string;
    pressed?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Radio: (props: Props) => React.JSX.Element;
