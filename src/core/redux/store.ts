import { createStore } from "redux";
import AuthenticationReducer from "./reducers/AuthenticationReducer";

const store = createStore(AuthenticationReducer);

export default store;