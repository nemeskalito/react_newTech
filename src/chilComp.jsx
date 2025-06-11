const ChildComponent = props => {
	return (
		<h1>
			Привет, {props.name}! Текущий счетчик: {props.counter}
		</h1>
	)
}
export default ChildComponent
