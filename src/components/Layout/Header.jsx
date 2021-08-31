import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImg from '../../assets/meals.jpeg'

export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes}>Yummi2</h1>
        <button className={classes}>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="foodImg" className={classes} />
      </div>
    </Fragment>
  );
}
