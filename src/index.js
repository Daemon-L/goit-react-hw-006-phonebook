import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './store';
import { ADD_TODO} from './store/todo/action-types';

// store.dispatch({
//   type: ADD_TODO,
//   payload: {
//     id: 1,
//     content: 'My first redux action'
//   }
// });

// store.dispatch({
//   type: ADD_TODO,
//   payload: {
//     id: 2,
//     content: 'My second redux action'
//   }
// });

// const newState = store.getState();
// console.log(newState);

store.dispatch({
  type: ADD_TODO,
  payload: {id:1, content: 'my first redux action',}
});

store.dispatch({
  type: ADD_TODO,
  payload: {id:2, content: 'my second redux action',}
});
console.log(store.getState());


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider>, */}
  </React.StrictMode>,
);

// import store from './store/store';
// import { addTodo, removeTodo } from './todo/actions';
// import { ADD_TODO, REMOVE_TODO } from './todo/action-types';
// import { Provider } from "react-redux";

// store.dispatch(addTodo('my first redux action'));
// store.dispatch(addTodo('my second redux action'));

// const state = store.getState();
// const todoToRemove = state.todos.list[0];
// console.log('qwerty', todoToRemove);


// store.dispatch({
//   type: ADD_TODO,
//   payload: {id:1, content: 'my first redux action',}
// });

// store.dispatch({
//   type: ADD_TODO,
//   payload: {id:2, content: 'my second redux action',}
// });
// console.log(store.getState());

// store.dispatch(removeTodo(1));
// store.dispatch(removeTodo(3));

// store.dispatch({
//   type: REMOVE_TODO,
//   payload: { id: 1 }
// });
// console.log(store.getState());
