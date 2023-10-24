import axios from "axios";
import { FC, useEffect, useState } from "react";
import Card from './components/Card'

import { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import UserItem from "./components/UserItem";
import { ITodo, IUser } from "./types/types";

const App: FC = () => {
	const [users, setUsers] = useState<Array<IUser>>([])
	const [todos, setTodos] = useState<Array<ITodo>>([])

	useEffect(() => {
		fetchUsers()
		fecthTodods()
	}, [])

	async function fetchUsers() {
		try {
			const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			setUsers(responce.data)
		} catch (e) {
			console.log(e)
		}
	}
	async function fecthTodods() {
		try {
			const responce = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
			setTodos(responce.data)

		} catch (e) {
			console.log(e)
		}
	}
	return (
		<>
			<EventsExample />
			<Card onClick={(num: number) => console.log(num)} variant={CardVariant.ontlined} width="100px" height="100px" >
				<button>title</button>
			</Card>
			<List items={users}
				renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
			/>
			<List items={todos}
				renderItem={(todoI: ITodo) => <TodoItem todoI={todoI} key={todoI.id} />}
			/>
		</>
	)
}

export default App
