import { createStore, combineReducers } from "redux";
import todosReduser from './todo/reduser';

const store = createStore(
  combineReducers({
    todos: todosReduser
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;