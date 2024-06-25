import React from "react";
import { colors } from "@mui/material";
import "./nav.css";

export const Nav = ({ children, ...props }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // height: "55px",
        transition: "0.2s",
      }}
    >
      <div
        {...props}
        className={[props.variant, props.size].join(" ")}
      ><div className="inner_div1"><props.icons className="ico1"/><props.icon3 className="ico"/><h5>{props.project}</h5><props.icon3 className="ico"/><h5>{props.user}</h5><props.icon3 className="ico"/><h5>{props.role}</h5><props.icon3 className="ico"/><h5>{props.results}</h5></div><props.icon2 className="ico2"/></div>
    </div>
  );
};
