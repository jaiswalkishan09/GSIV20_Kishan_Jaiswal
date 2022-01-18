import addReducer from "../reducer/addReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  addReducer,
});
export default rootReducer;
