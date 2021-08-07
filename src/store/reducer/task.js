import { TASK_STATE } from "../constants";

const initialState = {
  tasks: [],
};

export const task = (state = initialState, action) => {
  switch (action.type) {
    case TASK_STATE:
      return {
        ...state,
        tasks: action.task,
      };

    default:
      return state;
  }
};
