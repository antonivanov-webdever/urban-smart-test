import { combineReducers } from "redux";
import {loginReducer} from "./loginReducer";

export default combineReducers({ user: loginReducer });