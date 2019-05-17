import React from "react";
import BenchIndexItem from "./bench_index_item";

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    return (
      <div></div>
    );
  }
  
};