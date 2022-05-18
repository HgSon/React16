import React, {Component} from "react";

export class ProductList extends Component {

	render() {
		let products = this.props.products;
		if (products == null || products.length === 0) {
			return <h5 className="p-2">No Products</h5>
		}

		return products.map(p =>
			<div className="card m-1 p-1 bg-light" key={ p.id }>
				<h4>
					{ p.name}
					<span className="badge badge-pill badge-primary float-right">{ p.price.toFixed(2) }</span>
				</h4>
				<div>
					{ p.description}
				</div>
			</div>
		)
	}
}