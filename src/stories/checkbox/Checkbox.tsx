import React from "react";
import "./Checkbox.scss";
export interface props {
  label: string;
  checked: boolean;
  disabled: boolean;
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
}
export const Checkbox = (props: props) => {
  function disabled(props: props) {
    // console.log(props.disabled)
    return props.disabled === true ? "storybook-checkbox--disabled" : null;
  }

  return (
    <div className={`${disabled(props)}`}>
      <label className="form-control">
        <input
          type="checkbox"
          name="checkbox"
          className={
            props.pressed
              ? "checkme"
              : props.default
              ? "check"
              : ["bbb", disabled(props)].join(" ")
          }
          {...props}
        />
      </label>
      <label className="labb">{props.label}</label>
    </div>
  );
};
