import addReducer from "../reducer/addReducer";
import pageReducer from "../reducer/pageReducer";
import idReducer from "./idReducer";
import movieDetailReducer from "./movieDetailReducer";
import movieCreditReducer from "./movieCreditReducer";
import showReducer from "./showReducer";
import searchPageReducer from "./searchPageReducer";
import { combineReducers } from "redux";
import inputReducer from "./inputReducer";

const rootReducer = combineReducers({
  addReducer,
  pageReducer,
  idReducer,
  movieDetailReducer,
  movieCreditReducer,
  showReducer,
  searchPageReducer,
  inputReducer,
});
export default rootReducer;
