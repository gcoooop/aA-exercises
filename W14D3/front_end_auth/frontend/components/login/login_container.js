import { connect } from "react-redux";
import { login } from "../../actions/session"
import Login from "./login";

const mstp = state => {
  return {
    user: { username: "", password: "" }
  };
};
const mdtp = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(mstp, mdtp)(Login);