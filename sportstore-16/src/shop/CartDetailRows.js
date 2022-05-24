import React, { Component } from 'react';

export class CartDetailRows extends Component {

	updateQuantity = (product, event) => {
		this.props.updateQuantity(product, event.target.value)
	}

	render() {
		if (!this.props.cart || this.props.cart.length === 0) {
			return <tr><td colSpan="5">Your Cart Is Empty</td></tr>
		} else {
			return <React.Fragment>
					{ this.props.cart.map(item => {
						//console.log("item", item.product);
						return (
							<tr key={ item.product.id }>
								<td>
									<input type="number" value={ item.quantity }
									       onChange={(event) => this.updateQuantity(item.product, event) } />
								</td>
								<td>{ item.product.name }</td>
								<td>{ item.product.price.toFixed(2) }</td>
								<td>{ (item.product.price * item.quantity).toFixed(2) }</td>
								<td>
									<button className="btn btn-sm btn-danger"
											onClick={ () => this.props.removeFromCart(item.product) }>
										Remove
									</button>
								</td>
							</tr>
						)
					})}
					<tr>
						<th colSpan="3" className="text-right">Total:</th>
						<th colSpan="2">${ this.props.cartPrice.toFixed(2) }</th>
					</tr>
			</React.Fragment>
		}
	}
}