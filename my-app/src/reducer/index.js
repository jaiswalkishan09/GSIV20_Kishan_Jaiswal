import addReducer from "../reducer/addReducer";
import pageReducer from "../reducer/pageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  addReducer,
  pageReducer,
});
export default rootReducer;
