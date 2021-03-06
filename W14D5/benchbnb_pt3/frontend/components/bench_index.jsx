import React from "react";
import BenchIndexItem from "./bench_index_item";

class BenchIndex extends React.Component {
  componentDidMount() {
    // this.props.fetchBenches(this.props.bounds);
  }

  render() {
    const benchLis = this.props.benches.map( bench => <BenchIndexItem key={bench.id} bench={bench} /> )

    return (
      <ul>
        {benchLis}
      </ul>
    );
  }
  
};

export default BenchIndex;