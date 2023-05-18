import React, {useState, useEffect} from 'react'
import { useAuth } from '../../contexts'
import { TodoForm, TodoList } from '../../components';
import './style.css'

// function index() {
// const [inputText, setInputText] = useState('');
//   const [todos, setTodos] = useState([]);
//   const [status, setStatus] = useState('all');
//   const [filteredTodos, setFilteredTodos] = useState([]);
//     const  {user} = useAuth();

//     useEffect(() => {
//         filterHandler()
//       }, [status, todos])
    
//       function filterHandler() {
//         if(status === 'completed') {
//           setFilteredTodos(todos.filter(todo => todo.completed === true))
//         } else if (status === 'uncompleted') {
//           setFilteredTodos(todos.filter(todo => todo.completed === false))
//         } else {
//           setFilteredTodos(todos);
//         }
//       }

//   return (
//     <> 
//    <header>{user}Todo List</header>
//       <TodoForm inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
//       <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
//     </>
//   )
// }
function index() {
    // const [inputText, setInputText] = useState('');
    //   const [todos, setTodos] = useState([]);
    //   const [status, setStatus] = useState('all');
    //   const [filteredTodos, setFilteredTodos] = useState([]);
        const  {user} = useAuth();
    
    //     useEffect(() => {
    //         filterHandler()
    //       }, [status, todos])
        
    //       function filterHandler() {
    //         if(status === 'completed') {
    //           setFilteredTodos(todos.filter(todo => todo.completed === true))
    //         } else if (status === 'uncompleted') {
    //           setFilteredTodos(todos.filter(todo => todo.completed === false))
    //         } else {
    //           setFilteredTodos(todos);
    //         }
    //       }
    
      return (
        <> 
       <header>{user}Todo List</header>
          <TodoForm  />
          <TodoList  />
        </>
      )
    }

export default index


  
 