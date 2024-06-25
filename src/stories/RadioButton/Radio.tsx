import React from "react";
import "./Radio.css";

export interface Props {
  label: string;
  disabled: boolean;
  checked: boolean;
  value: string;
  pressed?: boolean;
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = (props: Props) => {
  function disabled(props: Props) {
    return props.disabled === true ? "disabledRadio" : null;
  }

  return (
    <div
      className={`${disabled(props)}`}
      style={{ width: "auto", display: "inline" }}
    >
  
      <div
        className={
          props.pressed
            ? "radio-item"
            : ["radio-item1", disabled(props)].join(" ")
        }
      >
        <input
          type="radio"
          name="radio"
          id={props.pressed ? "radio2" : "radio3"}
          {...props}
        />
        <label htmlFor={props.pressed ? "radio2" : "radio3"} className="lable1" />
        <label className="label_me">{props.label}</label>
      </div>
    </div>
  );
};
