import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImg from '../../assets/meals.jpeg'
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes}>Yummi2</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="foodImg" className={classes} />
      </div>
    </Fragment>
  );
}
