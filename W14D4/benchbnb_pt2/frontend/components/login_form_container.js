import { connect } from "react-redux";
import { login } from "../actions/sessions_actions";
import SessionForm from "./session_form";

const mstp = (state, ownProps) => {
  return {
    errors: state.session.errors,
    formType: "login"
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mstp, mdtp)(SessionForm);