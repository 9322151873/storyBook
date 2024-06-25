import React, { useState, useEffect } from "react";
import "./Tooltip.css";
import CloseIcon from "@mui/icons-material/Close";
export interface Props {
  label: string;
  paragraph: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Genral?: boolean; 
  Success?: boolean;
  Information?: boolean;
  WarninG?: boolean;
  Error?: boolean;
  variant?: string;
}

export const Tooltip = (props: Props) => {
  const [textColor, setTextColor] = useState("black");
  const [cross, setCross] = useState("block");
  const [cross1, setCross1] = useState("none");

  useEffect(() => {
    if (props.paragraph.length > 0) {
      setTextColor(
        props.Success
          ? "#5ca700"
          : props.Information
          ? "rgb(49, 85, 247)"
          : props.WarninG
          ? "rgb(241, 191, 23)"
          : props.Error
          ? "rgb(214, 23, 166)"
          : props.Genral
          ? "white"
          : "black"
      ),
        setCross1("block");
    } else {
      setTextColor("black"), setCross1("none");
    }
  }, [
    props.paragraph,
    props.Success,
    props.Information,
    props.WarninG,
    props.Error,
    props.Genral,
  ]);

  return (
    <div style={{ display: cross }} className="mmk">
      <div className={props.variant}>
        <div
          className={
            props.Success
              ? "Success7"
              : props.Information
              ? "Information7"
              : "error7"
          }
          {...props}
        >
          <h6
            style={{
              fontSize: "12px",
              color: props.Genral ? "white" : textColor,
            }}
          >
            {props.label}
          </h6>
          <div className="cross" onClick={() => setCross("none")}>
            <CloseIcon
              style={{
                display: cross1,cursor:"pointer",
                color: props.Genral ? "white" : textColor,
              }}
            />
          </div>
        </div>
        <h6 className="para_div">{props.paragraph}</h6>
      </div>
    </div>
  );
};
