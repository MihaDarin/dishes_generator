import React from "react";
import { MyText } from "../MyText/MyText";
import style from "./Header.module.css";
export const Header: React.FC = () => {
  return (
    <header className={style.header__wrapper}>
      <MyText />
    </header>
  );
};
