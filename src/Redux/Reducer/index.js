import todos from "./todos";
import { combineReducers } from "redux";

const rootReducer =combineReducers({
    todos:todos ,
});

export default rootReducer;