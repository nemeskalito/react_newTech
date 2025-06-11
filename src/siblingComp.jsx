import { useState } from 'react'

const SiblingComponent = () => {
	const [text, useText] = useState('')
	const handleСhange = event => {
		useText(event.target.value)
	}
	const handleClick = () => {
		useText('REDEV')
	}
	return (
		<div>
			<button onClick={handleClick}>Изменить текст</button>
			<div>
				<input onChange={handleСhange} type='text' />
				<p>{text}</p>
			</div>
		</div>
	)
}

export default SiblingComponent
