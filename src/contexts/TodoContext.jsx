import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  const [todos, setTodos] = useState([{
    "id": 7,
    "task": "Fill gas tank",
    "completed": true
  }, {
    "id": 8,
    "task": "Change linens",
    "completed": false
  }, {
    "id": 9,
    "task": "Rake leaves",
    "completed": true
  }]);

  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodo = (inputText) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    filterHandler()
  }, [status, todos])

 const filterHandler =(status) => {
    if(status === 'completed') {
      setFilteredTodos(todos.filter(todo => todo.completed === true))
    } else if (status === 'uncompleted') {
      setFilteredTodos(todos.filter(todo => todo.completed === false))
    } else {
      setFilteredTodos(todos);
    }
  }

  console.log(todos)
  return (
    <TodoContext.Provider value={{  todos:filteredTodos, addTodo, deleteTodo, toggleTodo, filterHandler }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);