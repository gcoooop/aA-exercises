import { connect } from "react-redux";
import { logout } from "../actions/sessions_actions";
import Greeting from "./greeting";

const mstp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdtp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mstp, mdtp)(Greeting);