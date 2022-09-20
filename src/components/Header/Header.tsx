import React from "react";
import { Navbar } from "../Navbar/Navbar";
import classes from "./Header.module.css";
const categories = [
  { id: 1, categoryName: "Генератор Блюд" },
  { id: 2, categoryName: "Рецепты" },
];
export const Header: React.FC = () => {
  return (
    <header className={classes.header__wrapper}>
      <div className={classes.content__wrapper}>
        <h1>Генератор Блюд</h1>
      </div>
      <Navbar categories={categories} />
    </header>
  );
};
