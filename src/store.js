import { createStore } from 'redux'
import rootReducer from './reducer'

/* createStore can also accept a preloadedState value as its second argument. You could use this to add initial data when the store is created, such as values that were included in an HTML page sent from the server, or persisted in localStorage and read back when the user visits the page again, like this: */
let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  }
}

const store = createStore(rootReducer, preloadedState)

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
