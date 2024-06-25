// import React, { useState } from 'react';
import React from "react";
import "./button.css"


interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type:"primary"|"secondary"|"danger"|"success";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**k
   * Button contents
   */
  label: string;

  disabled:boolean;



  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = "primary4",
  size = 'medium',
  backgroundColor,
  label,

  
  ...props
}: ButtonProps) => {
  
  const mode = type=="primary4" ? 'primary4' :type=="secondary4" ? 'secondary4':type=="danger4" ?"danger4":"success4";
  return ( 
    <button 
      type="button" 
      className={['button', `${size}`, mode].join(' ')} 
      style={{ backgroundColor }} 
      {...props}  
    > 
      {label} 
    </button> 
  ); 
}; 

