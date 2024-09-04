import { connect } from "react-redux";
import Home from "../Components/Home";
import { addToCart } from "../Services/Actions/action";

const mapStateToProps = (state) => {
  return {
    cartData: state.cartItems, // Adjust this according to your state structure
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartHandler: (data) => dispatch(addToCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
