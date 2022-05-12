import React, {Component} from "react";

export default class TodoCreator extends Component {

	constructor(props) {
		super(props);

		this.state = {
			newItemText: ""
		}
	}

	updateNewTextValue = (event) => {
		this.setState({newItemText: event.target.value})
	}

	createNewTodo = () => {
		let text = this.state.newItemText;
		if (text !== "" && !this.props.items.find(item => item.action === text)) {
			this.props.createNewTodo(text);
			this.setState({newItemText: ""})
		}
	}

	render = () =>
		<div className="my-1">
			<input className="form-control" value={ this.state.newItemText } onChange={ this.updateNewTextValue } />
			<button className="btn btn-primary mt-1" onClick={ this.createNewTodo }>ADD</button>
		</div>
}