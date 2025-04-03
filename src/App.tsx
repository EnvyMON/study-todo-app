import { useState } from "react"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

function App() {

	const [todos, setTodos] = useState(dummyData);

	const setTodoCompleted = (id: number, completed: boolean) => {
		setTodos((prev)=>{
			return prev.map((todo)=>{
				if (todo.id === id) {
					return {...todo, completed: completed}
				} else {
					return todo
				}
			})
		})
	}

	const addTodo = (title: string) => {
		setTodos((prev)=>{
			return [
				
				{
					id: prev.length + 1,
					title: title,
					completed: false
				},
				...prev
			]
		})
	}

	const deleteTodo = (id: number) => {
		setTodos((prev)=>{
			return prev.filter((todo)=> todo.id !== id)
		})
	}

	const deleteAllCompletedTodos = () => {
		setTodos((prev)=>{
			return prev.filter((todo)=>{return todo.completed != true})
		})
	}


	return (
		<main className="py-10 h-screen space-y-5">
			<h1 className="text-3xl font-bold text-center">Your Todos</h1>
			<div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
				<AddTodoForm onSubmit={addTodo}/>
				<TodoList 
					todos={todos}
					onCompletedChange={setTodoCompleted}
					onDelete={deleteTodo}
				/>
			</div>
			<TodoSummary 
				todos={todos}
				deleteAllCompleted={deleteAllCompletedTodos}
			/>
		</main>
	)
}

export default App
