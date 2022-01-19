import addReducer from "../reducer/addReducer";
import pageReducer from "../reducer/pageReducer";
import idReducer from "./idReducer";
import movieDetailReducer from "./movieDetailReducer";
import movieCreditReducer from "./movieCreditReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  addReducer,
  pageReducer,
  idReducer,
  movieDetailReducer,
  movieCreditReducer,
});
export default rootReducer;
