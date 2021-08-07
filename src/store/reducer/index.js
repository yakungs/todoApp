import { combineReducers } from "redux";
import { task } from "./task";

const Reducers = combineReducers({
  taskState: task,
});

export default Reducers;
