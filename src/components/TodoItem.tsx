import React from 'react'
import { TodoType } from '../types/todo'
import { Trash2 } from 'lucide-react';

type TodoItemProps = {
	todo: TodoType;
	onCompletedChange: (id: number, completed: boolean)=>void;
	onDelete: (id: number)=>void;
}

const TodoItem = ({todo, onCompletedChange, onDelete}: TodoItemProps) => {
	return (
		<div className='flex items-center gap-1'>
			<label className='flex items-center gap-2 p-2 border border-gray-400 rounded-md bg-white hover:bg-slate-50 grow'>
				<input 
					type='checkbox'
					className='scale-125'
					checked={todo.completed}
					onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
				/>
				<span className={todo.completed ? "line-through text-gray-400" : ""}>
					{todo.title}
				</span>
			</label>
			<button className='p-2' onClick={()=>{onDelete(todo.id)}}>
				<Trash2 size={20} className='text-gray-500'/>
			</button>
		</div>
	)
}

export default TodoItem