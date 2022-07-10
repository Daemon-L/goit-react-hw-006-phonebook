import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store, {persistor}  from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PersistGate } from 'redux-persist/integration/react'
// import { addTodoNew, removeTodoNew } from "./store/todoNew/actionsNew";

// reduxToolkitStore.dispatch(addTodoNew({
//   id: 1,
//   content: 'some content1'
// }))
// reduxToolkitStore.dispatch(addTodoNew({
//   id: 2,
//   content: 'some content2'
// }))
// reduxToolkitStore.dispatch(removeTodoNew({
//   id: 2,
// }));
// reduxToolkitStore.subscribe(() => {
//   console.log(reduxToolkitStore.getState());
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
);

// *******************************************************************************

// import { addTodo, removeTodo } from './store/todo/actions';
// import { ADD_TODO, REMOVE_TODO } from './store/todo/action-types';
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addTodo('My first redux action'));

// setTimeout(() => {
//   store.dispatch(addTodo('My second redux action'));
//   setTimeout(() => {
//     const state = store.getState();
//     const todoToRemove = state.todos.list[0];
//     store.dispatch(removeTodo(todoToRemove.id));
//     setTimeout(() => {
//       store.dispatch(removeTodo(3));
//     }, 2000);
//   }, 2000);
// }, 2000);

// store.dispatch(addTodo('My second redux action'));

// const state = store.getState();
// const todoToRemove = state.todos.list[0];

// store.dispatch({
//   type: ADD_TODO,
//   payload: {
//     id: 1,
//     content: 'My first redux action'
//   }
// });

// console.log('До удаления', store.getState());

// store.dispatch(removeTodo(todoToRemove.id));
// store.dispatch(removeTodo(3));

// store.dispatch({
//   type: REMOVE_TODO,
//   payload: { id: 1 }
// });

