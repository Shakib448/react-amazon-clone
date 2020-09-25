import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFormBasket = () => {
    dispatch({
      type: "REMOVE_FORM_BASKET",
      id,
    });
  };
  return (
    <div key={id} className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p>{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, ind) => (
              <p key={ind} role="img" aria-label="star">
                {" "}
                ⭐
              </p>
            ))}
        </div>
        <button onClick={removeFormBasket}>Remove form basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
