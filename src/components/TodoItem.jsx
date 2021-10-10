import React from 'react'

export function TodoItem({todo, toogleTodo}) {
	//Destructuring
	const {id, task, completed} = todo;

	const handleTodoClick = () =>{
		toogleTodo(id);
	}

	return (
		<li>
			<input type="checkbox" checked={completed} onChange={handleTodoClick} />
			{task}
		</li>
	)
}
