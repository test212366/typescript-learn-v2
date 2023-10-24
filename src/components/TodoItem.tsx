import { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
	todoI: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todoI }) => {
	return (
		<div>
			{todoI.id}, {todoI.title}
			<input type="checkbox" checked={todoI.completed} />
		</div>
	)
}
export default TodoItem