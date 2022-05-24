import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Thanks extends Component {
	render() {
		console.log("thx", this.props)
		return (
			<div>
				<div className="col bg-dark text-white">
					<div className="navbar-brand">SPORTS STORE</div>
				</div>
				<h2>Thanks</h2>
				<p>Thanks for placing your order.</p>
				{/*미완*/}
				<p>Your order is #{ 0 }</p>
				<p>We'll shop your goods as soon as possible.</p>
				<Link to="/shop" className="btn btn-primary">
					Return to Store
				</Link>
			</div>
		)
	}
}