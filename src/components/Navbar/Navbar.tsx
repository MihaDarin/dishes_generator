import React from "react";
import { Category } from "../types/types";
// import { MyButton } from "../UI/MyButton/MyButton";
import { MyLink } from "../UI/MyLink/MyLink";
import classes from "./Navbar.module.css";

interface NavbarProps {
  categories: Category[];
}

export const Navbar: React.FC<NavbarProps> = ({ categories }) => {
  return (
    <nav className={classes.nav__wrapper}>
      <h3>Категории</h3>
      <div className={classes.nav__links}>
        {categories.map((category) => {
          return <MyLink>{category.categoryName}</MyLink>;
        })}
      </div>
    </nav>
  );
};
