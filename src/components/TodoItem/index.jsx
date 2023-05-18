import { TodoContext } from '../../contexts/TodoContext';

function TodoItem() {
	const { todos, deleteTodo, toggleTodo } = useContext(TodoContext);

	return(
		<li className="todo">
			<span className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todos.text}</span>
			<button className="trash-btn" onClick={() => deleteTodo(todos.id)}>Delete</button>
			<button className="complete-btn" onClick={() => toggleTodo(todos.id)}>Complete</button>
		</li>
	)
	}

export default TodoItem;