import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

/* createStore can also accept a preloadedState value as its second argument. You could use this to add initial data when the store is created, such as values that were included in an HTML page sent from the server, or persisted in localStorage and read back when the user visits the page again, like this: */
/* let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  }
} */

//Middleware

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(
  rootReducer,
  /* middlewareEnhancer */ composedEnhancer
)

export default store

// const todoAppState = {
//     todos: [
//       { id: 0, text: 'Learn React', completed: true },
//       { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
//       { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
//     ],
//     filters: {
//       status: 'Active',
//       colors: ['red', 'blue']
//     }
//   }
