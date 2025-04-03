import TodoItem from './TodoItem'
import { TodoType } from '../types/todo'

type TodoListProps = {
	todos: TodoType[];
	onCompletedChange: (id: number, completed: boolean)=>void;
	onDelete: (id: number)=>void;
}

const TodoList = ({todos, onCompletedChange, onDelete}: TodoListProps) => {

	const todosSorted = todos.sort((a, b)=>{
		if(a.completed === b.completed){
			return b.id - a.id;
		} else {
			return a.completed ? 1 : -1
		}
	})

	return (
		<>
			<div className="space-y-2">
				{
					todosSorted.map((todo)=>(
						<TodoItem 
							key={todo.id} 
							todo={todo} 
							onCompletedChange={onCompletedChange}
							onDelete={onDelete}
						/>
					))
				}
			</div>
			{
				todos.length === 0 && (
					<div className='text-center text-sm text-gray-500'>No todos yet. Add a new one above.</div>
				)
			}
		</>
	)
}

export default TodoList