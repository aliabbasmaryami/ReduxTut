import { connect } from "react-redux";
import Header from "../Components/Header";

const mapStateToProps = (state) => {
  return {
    data: state.cartItems, // Adjust this according to your state structure
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
