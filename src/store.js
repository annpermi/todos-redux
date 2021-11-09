import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
// import { print1, print2, print3 } from './exampleAddons/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

/* createStore can also accept a preloadedState value as its second argument. You could use this to add initial data when the store is created, such as values that were included in an HTML page sent from the server, or persisted in localStorage and read back when the user visits the page again, like this: */
/* let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  }
} */

//Middleware
// const middlewareEnhancer = applyMiddleware(print1, print2, print3)
const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware()
  //   applyMiddleware(print1, print2, print3)
  // other store enhancers if any
)

const store = createStore(
  rootReducer /* preloadedState */,
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
