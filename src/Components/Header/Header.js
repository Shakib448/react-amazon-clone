import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider/StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();

  return (
    <nav className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </NavLink>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <NavLink to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Shakib</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </NavLink>
        <NavLink to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </NavLink>
        <NavLink to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </NavLink>
        <NavLink to="/checkout" className="header__link">
          <div className="heder__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {" "}
              {basket?.length}{" "}
            </span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
