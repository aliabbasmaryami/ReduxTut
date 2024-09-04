import React from "react";
import "./Home.css";

const Header = (props) => {
  console.log(props, "this is props/home/header");

  return (
    <div>
      <div className="add-to-cart">
        <span>{props.data?.length || 0}</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5gr9IhqJ_QHKvDVSe08cnNDFEGbYpPIxPw&s"
          alt="Cart Icon"
        />
      </div>
    </div>
  );
};

export default Header;
