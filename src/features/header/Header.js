import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewTodo } from '../todos/todosSlice'

const Header = () => {
  const [text, setText] = useState('')
  const [status, setStatus] = useState('idle')
  const dispatch = useDispatch()

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = async (e) => {
    const trimmedText = text.trim()
    // If the user pressed the Enter key:
    if (/* e.key === 'Enter' */ e.which === 13 && trimmedText) {
      // Dispatch the "todo added" action with this text
      // dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      setStatus('loading')
      await dispatch(saveNewTodo(trimmedText))
      // And clear out the text input
      setText('')
      setStatus('idle')
    }
  }

  let isLoading = status === 'loading'
  let placeholder = isLoading ? '' : 'What needs to be done?'
  let loader = isLoading ? <div className="loader" /> : null

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder={placeholder}
        value={text}
        autoFocus={true}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        disabled={isLoading}
      />
      {loader}
    </header>
  )
}

export default Header
