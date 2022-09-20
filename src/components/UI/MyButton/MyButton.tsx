import React from "react";
import classes from "./MyButton.module.css";

interface MyButtonProps {
  children?: React.ReactNode;
}

export const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return <button className={classes.content}>{children}</button>;
};
