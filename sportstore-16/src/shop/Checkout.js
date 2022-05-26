import React, {Component} from 'react';
import {ValidatedForm} from "../forms/ValidatedForm";

export class Checkout extends Component {

	constructor(props) {
		super(props);
		this.defaultAttrs = { type: "text", required: true}
		this.formModel = [
			{ label: "Name" },
			{ label: "Email", attrs: { type: "email" }},
			{ label: "Address" },
			{ label: "city" },
			{ label: "Zip/Postal Code", name: "zip"},
			{ label: "Country" }
		]
	}

	handleCancel = () => {
		this.props.history.push("/shop/cart");
	}

	handleSubmit = (formData) => {
		if (this.props.cart) {
			const order = { ...formData, products: this.props.cart.map(item => ({ quantity: item.quantity, product_id: item.product.id }))}
			this.props.placeOrder(order);
			this.props.clearCart();
		}
		// TODO 로직 변경
		this.props.history.push("/shop/thanks");
	}

	render() {
		console.log(this.props)
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col bg-dark text-white">
						<div className="navbar-brand">SPORTS STORE</div>
					</div>
				</div>
				<div className="row">
					<div className="col m-2">
						<ValidatedForm formModel={ this.formModel }
						               cancelCallback={ this.handleCancel }
						               submitCallback={ this.handleSubmit }
						               cancelText="Return to Cart"
						               submitText="Place Order"
						               defaultAttrs={ this.defaultAttrs }
						/>
					</div>
				</div>
			</div>
		)
	}
}