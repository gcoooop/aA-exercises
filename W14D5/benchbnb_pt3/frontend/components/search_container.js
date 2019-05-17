import { connect } from "react-redux";
import Search from "./search";
import { fetchBenches } from "../actions/benches_actions";
import { updateBounds } from "../actions/filter_actions";

const mstp = state => {
  return {
    benches: Object.values(state.entities.benches),
    bounds: state.filters.bounds
  };
};

const mdtp = dispatch => {
  return {
    fetchBenches: bounds => dispatch(fetchBenches(bounds)),
    updateBounds: bounds => dispatch(updateBounds(bounds))
  };
};

export default connect(mstp, mdtp)(Search);