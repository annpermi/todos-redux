import React from 'react'
import TodoList from './features/todos/TodoList'
import Header from './features/header/Header'
import Footer from './features/footer/Footer'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Todos</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Let's create your Todo List</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
