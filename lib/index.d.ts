import React from 'react';

interface Props {
    label: string;
    paragraph: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    Genral?: boolean;
    Success?: boolean;
    Information?: boolean;
    WarninG?: boolean;
    Error?: boolean;
}
declare const Tooltip: (props: Props) => React.JSX.Element;

export { Tooltip };
