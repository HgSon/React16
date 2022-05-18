import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class CartSummary extends Component {

	getSummary = () => {
		if (this.props.cartItems > 0) {
			return <span>{ this.props.cartItems } item(s), ${ this.props.cartPrice }</span>
		} else {
			return <span>Your Cart is : Empty </span>
		}
	}

	getLinkClasses = () => {
		return `btn btn-sm bg-dark text-white 
			${this.props.cartItems === 0 ? "disabled" : ""}`
	}

	render() {
		return (
			<div className="float-right">
				<small>
					{ this.getSummary() }
					<Link to="/shop/cart" className={ this.getLinkClasses() }>
						<i className="fa fa-shopping-cart"></i>
					</Link>
				</small>
			</div>
		)
	}
}