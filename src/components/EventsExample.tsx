import { ChangeEvent, FC, useState, MouseEvent, DragEvent, useRef } from "react";

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('')
	const [isDrag, setIsDrag] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement>(null)
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target!.value)
	}
	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current!.value)

	}
	const dragHandler = (e: DragEvent<HTMLDivElement>) => {

	}
	const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(true)
	}
	const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
	}
	const dropHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
	}

	return (
		<>
			<input type="text" value={value} onChange={changeHandler} />
			<input type="text" ref={inputRef} placeholder="1" />
			<button onClick={clickHandler}>s</button>
			<div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}></div>
			<div onDrop={dropHandler} onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
				style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 10 }}></div>
		</>
	)
}
export default EventsExample