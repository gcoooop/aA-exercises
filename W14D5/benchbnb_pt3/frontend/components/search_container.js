import { connect } from "react-redux";
import Search from "./search";
import { fetchBenches } from "../actions/benches_actions";

const mstp = state => {
  return {
    benches: Object.values(state.entities.benches)
  };
};

const mdtp = dispatch => {
  return {
    fetchBenches: () => dispatch(fetchBenches())
  };
};

export default connect(mstp, mdtp)(Search);