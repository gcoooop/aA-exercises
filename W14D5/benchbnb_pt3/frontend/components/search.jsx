import React from "react";
import BenchMap from "./bench_map";
import BenchIndex from "./bench_index";

const Search = props => {
  const { benches, fetchBenches, updateBounds } = props;
  return (
    <div>
      <BenchIndex benches={benches} fetchBenches={fetchBenches} />
      <BenchMap benches={benches} updateBounds={updateBounds}/>
    </div>
  );
};

export default Search;