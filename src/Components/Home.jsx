import React from "react";
import "./Home.css";

const Home = (props) => {
  console.log(props, "this is props/home");

  return (
    <div>
      <h1>HomeContainer</h1>
      <div className="main-cart">
        <div className="img-wrapper-item">
          <img
            src="https://i.pcmag.com/imagery/roundups/01LGL23MDBwSqivAsdTF3Ui-37..v1698792495.jpg"
            alt=""
          />
        </div>
        <div className="text-wrapper">
          <span>hp laptop</span>
          <span>price $100</span>
        </div>
        <div className="btn-wrapper">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 100.0, name: "i phone 12" })
            }
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
