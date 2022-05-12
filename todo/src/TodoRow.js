import React, {Component} from "react";

export default class TodoRow extends Component {
	render = () =>
		<tr>
			<td>{ this.props.action }</td>
			<td>
				<input type="checkbox" checked={ this.props.done }
				       onChange={ this.props.toggleTodo } />
			</td>
		</tr>
}