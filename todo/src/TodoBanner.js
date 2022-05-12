import React, {Component} from "react";

export default class TodoBanner extends Component {
	render = () => <h4 className="bg-primary text-white text-center p-2">
		{ this.props.name }'s To Do List
		({ this.props.items.filter(item => item.done === false).length} items to do)
	</h4>
}