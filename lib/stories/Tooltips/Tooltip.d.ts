import React from "react";
import "./Tooltip.css";
export interface Props {
    label: string;
    paragraph: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    Genral?: boolean;
    Success?: boolean;
    Information?: boolean;
    WarninG?: boolean;
    Error?: boolean;
}
export declare const Tooltip: (props: Props) => React.JSX.Element;
