import { useState } from 'react'
import './App.css'
import ChildComponent from './chilComp'
import SiblingComponent from './siblingComp'

function ParentComponent() {
	const [counter, useCounter] = useState(0)
	const handleClickUp = () => {
		useCounter(prevCount => prevCount + 1)
	}
	const handleClickDown = () => {
		useCounter(prevCount => {
			return prevCount > 0 ? prevCount - 1 : 0
		})
	}
	const defaultCount = () => {
		useCounter(0)
	}
	const randomCount = () => {
		useCounter(prevCount => {
			const min = 0
			const max = 10
			return (prevCount = Math.floor(Math.random() * (max - min + 1)) + min)
		})
	}
	return (
		<div>
			<ChildComponent name={'программист'} counter={counter} />
			<button onClick={handleClickUp}>Увеличить</button>
			<button onClick={defaultCount}>Сбросить</button>
			<button onClick={randomCount}>Случайное значение</button>
			<button onClick={handleClickDown}>Уменьшить</button>

			<p>{counter}</p>

			<SiblingComponent />
		</div>
	)
}

export default ParentComponent
