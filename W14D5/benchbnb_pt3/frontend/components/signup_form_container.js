import { connect } from "react-redux";
import { signup } from "../actions/sessions_actions";
import SessionForm from "./session_form";

const mstp = (state, ownProps) => {
  return {
    errors: state.session.errors,
    formType: "signup"
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mstp, mdtp)(SessionForm);