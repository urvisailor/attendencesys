import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./reducer";
import ReduxThunk from 'redux-thunk';
const rootReducer = combineReducers({
   auth:authReducer
});
  const store = createStore(rootReducer,applyMiddleware(ReduxThunk));
  export default store