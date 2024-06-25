import React from "react";
import "./Radio.scss";
export interface Props {
    label: string;
    disabled: boolean;
    checked: boolean;
    value: string;
    onChange: (value: string) => void;
}
export declare const Radio: (props: Props) => React.JSX.Element;
