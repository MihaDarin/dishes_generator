import React from "react";
import classes from "./MyLink.module.css";

interface MyLinkProps {
  children?: React.ReactNode;
}

export const MyLink: React.FC<MyLinkProps> = ({ children, ...props }) => {
  return <button className={classes.content}>{children}</button>;
};
