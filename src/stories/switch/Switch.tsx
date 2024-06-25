import React from "react";
import { colors } from "@mui/material";
import "./switch.css";
import { useState } from "react";

let circle1 = document.getElementById("circle")
export interface Props {
  children: ReactNode;
  label: string;
  required: boolean;
  disabled:boolean
  placeholder: string;
  placeholder1: string;
  message: string;
  variant: "withText" | "withIcon" ;
}
export const Switch = ({ children, ...props }: Props) => {
    const[state,setState] = useState("false")
    const [color,setColor] =useState("rgb(58, 59, 58)")
    const[ color1,setColor1] =useState("white")
    const[ color3,setColor3] =useState("black")

  const[left,setLeft] =useState("0px")
const [display1,setdisplay1] =useState("none")
const [display2,setdisplay2] =useState("block")

    const clickme = () => {
        
            setState(!state);
        if(state==false){
            setColor("rgb(58, 59, 58)")
            setColor1("white")
            setLeft("0px")
            setdisplay1("none")
            setdisplay2("block")
            setColor3("black")
        }
        else{
            setColor("white")
            console.log("red") 
            setColor1("blue")
            setLeft("29px")
            setdisplay1("block")
            setdisplay2("none")
            setColor3("blue")
        }
    }
  return (<>
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
        onClick = { clickme }
        style={{backgroundColor:color1,cursor:"pointer",border:`1px solid ${color3}`}}
      ><div className="circle" style={{backgroundColor:color,left:left,transition:"0.5s"}}>
        </div>
        {props.withIcon1?(<h6 style={{color:color,display:display2}} className="text1">{props.placeholder}
        </h6>):(<props.icon style={{display:display2,color:color}} className="iconn1"/>)}
         {props.withIcon1?(<h6 style={{color:color,display:display1,}} className="text2">
            {props.placeholder1}</h6>):(<props.icon1 style={{display:display1,color:color}} className="iconn2"/>)}</div>
    </div>
    </>
  );
};
