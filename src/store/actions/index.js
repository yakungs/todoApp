import { TASK_STATE } from "../constants/";

export const FetchTask = (data) => {
  return async (dispatch) => {
    dispatch({
      type: TASK_STATE,
      task: data,
    });
  };
};
