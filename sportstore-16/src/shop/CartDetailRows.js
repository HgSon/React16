import React, { Component } from 'react';

export class CartDetailRows extends Component {

	updateQuantity = (item, event) => {
		this.props.updateQuantity(item.product, event.target.value)
	}

	render() {
		if (!this.props.cart || this.props.cart.length === 0) {
			return <tr><td>Your Cart Is Empty</td></tr>
		} else {
			let list = this.props.cart.map(item => {
				return (
					<tr key={ item.product.id }>
						<td>
							<input type="number" value={ item.quantity }
							       onChange={(event) => this.updateQuantity(item, event) } />
						</td>
						<td>
							{ item.product.name }
						</td>
						<td>
							{ item.product.price }
						</td>
						<td>
							{ item.product.price * item.quantity }
						</td>
					</tr>
				)
			})
			return list;
		}
	}
}