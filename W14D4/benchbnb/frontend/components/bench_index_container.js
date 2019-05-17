import { connect } from "react-redux";
import BenchIndex from "./bench_index";
import { fetchBenches } from "../actions/benches_actions";

const mstp = state => {
  return {
    benches: state.entities.benches
  };
};

const mdtp = dispatch => {
  return {
    fetchBenches: () => dispatch(fetchBenches())
  };
};

export default connect(mstp, mdtp)(BenchIndex);