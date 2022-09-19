import React from "react";
import style from "./Main.module.css";
import { Content } from "./Content/Content";
import { Navbar } from "./Navbar/Navbar";

export const Main: React.FC = () => {
  return (
    <main className={style.main__wrapper}>
      <Navbar />
      <Content />
    </main>
  );
};
