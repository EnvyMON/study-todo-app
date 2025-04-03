import React, { useState } from 'react'

type AddtodoFormProps = {
	onSubmit: (title: string) => void
}

const AddTodoForm = ({onSubmit}: AddtodoFormProps) => {

	const [value, setValue] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(!value.trim()){
			return;
		} else {
			onSubmit(value);
			setValue("");
		}
	}

	return (
		<form className='flex' onSubmit={handleSubmit}>
			<input 
				type='text'
				placeholder='What needs to be done?'
				className='rounded-s-md grow border border-gray-400 p-2'
				value={value}
				onChange={(e)=>{setValue(e.target.value)}}
			/>
			<button 
				type='submit'
				className='w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800'
			>
				ADD
			</button>
		</form>
	)
}

export default AddTodoForm