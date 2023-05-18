
import { useContext } from "react";
import { TodoContext } from '../../contexts/TodoContext';
import TodoItem from "../TodoItem";


function TodoList() {
	 const filteredTodos = useContext(TodoContext);



	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo, idx) => <TodoItem   key={idx} todo={todo} />)
				
				}
				
			</ul>
		</div>
	)
}

export default TodoList;