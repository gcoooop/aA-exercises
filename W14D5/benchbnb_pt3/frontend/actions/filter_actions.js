import { fetchBenches } from "./benches_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = bounds => {
  return (dispatch, getState) => {
    dispatch({
        type: UPDATE_BOUNDS,
        bounds
      })
    return fetchBenches(getState().filters)(dispatch);  
  };
};