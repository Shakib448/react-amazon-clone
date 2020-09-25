import React from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12"
          title="Nulaxy Portable Laptop Stand, Aluminum Cooling Stand with Heat-Vent, Adjustable Laptop Holder Riser (A-Space Grey)"
          price={400}
          rating={5}
          image="https://m.media-amazon.com/images/I/61KuD7q0BoL._AC_UY218_.jpg"
        />
        <Product
          id="23"
          title="Hbada Gaming Chair Racing Style Ergonomic High Back Computer Chair with Height Adjustment, Headrest and Lumbar Support E-Sports Swivel Chair, Gray(1-Year Warranty)"
          price={164}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61uVsgKzYdL._AC_SY679_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="45"
          title="CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready &amp;amp; Win 10 Home (GXiVR8060A8, Black) Riser (A-Space Grey)"
          price={749}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71fVpfx5oiL._AC_SX679_.jpg"
        />
        <Product
          id="65"
          title="SAMSUNG 870 QVO-Series 2.5 SATA III Internal SSD Single Unit Version 1TB (MZ-77Q1T0B/AM)"
          price={109}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816YDcoWFpL._AC_SX679_.jpg"
        />
        <Product
          id="66"
          title="Node.js Web Development: Server-side web development made easy with Node 14 using practical examples, 5th Edition "
          price={27}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41e+IedpQXL._SX404_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="89"
          title="Samsung C49HG90DMU 124.2 cm (48.9) Quantum Dot LED LCD Monitor - 32:9-1 ms - 3840 x 1080"
          price={442}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
