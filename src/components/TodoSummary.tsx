import React from 'react'
import { TodoType } from '../types/todo'

type TodoSummaryProps = {
	todos: TodoType[];
	deleteAllCompleted: ()=>void;
}

const TodoSummary = ({todos, deleteAllCompleted}: TodoSummaryProps) => {

	const completedTodos = todos.filter((todo)=>{return todo.completed === true})

	return (
		<div className='text-center space-y-2'>
			<div className='text-sm font-medium'>
				{completedTodos.length}/{todos.length} Todos Completed
			</div>
			{
				completedTodos.length > 0 && (
					<button 
						className='text-red-500 text-sm font-medium hover:underline'
						onClick={deleteAllCompleted}
					>
						Delete all Completed
					</button>
				)
			}
		</div>
	)
}

export default TodoSummary