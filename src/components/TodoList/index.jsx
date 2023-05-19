
import { useContext } from "react";
import { TodoContext } from '../../contexts/TodoContext';
// import TodoItem from "../TodoItem";


function TodoList() {
	 const {todos, filterHandler,deleteTodo, toggleTodo,filteredTodos } = useContext(TodoContext);

	 console.log('TodoList:', todos)
	//  console.log('TodoList:', filteredTodos)
	 


	return (
		<div className="todo-container">
			<ul className="todo-list">
				{/* {todos.map((todo, idx) => <TodoItem filterHandler={filterHandler}  key={idx} todo={todo} />) */}
				{ todos.map((todo, idx) =>
				 <li className="todo" key = {todo.id}>
			<span className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.task}</span>
			<button className="trash-btn" onClick={() => filterHandler(deleteTodo(todo.id))}>Delete</button>
			<button className="complete-btn" onClick={() => filterHandler(toggleTodo(todo.id))}>Complete</button>
		</li>) 
				

				}
			</ul>
		</div>
	)
}

export default TodoList;