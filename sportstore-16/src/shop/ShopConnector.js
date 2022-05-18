import {connect} from "react-redux";
import {loadData} from "../data/ActionCreators";
import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Shop} from "./Shop";
import {DataTypes} from "../data/Types";
import {addToCart, clearCart, removeFromCart, updateCartQuantity} from "../data/CartActionCreators";

const mapStateToProps = (dataSource) => ({...dataSource});
const mapDispatchToProps = { loadData, addToCart, updateCartQuantity, removeFromCart, clearCart };

const filterProducts = (products = [], category) =>
	(!category || category === "All")
		? products
		: products.filter(p => p.category.toLowerCase() === category.toLowerCase())


export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
	class extends Component {
		render = () =>
			<Switch>
				<Route path="/shop/products/:category?"
				       render={(routeProps) => {
				       //	console.dir(this.props)
					     // console.dir(routeProps)
					      return  <Shop {...this.props} {...routeProps}
					       products={ filterProducts(this.props.products, routeProps.match.params.category)}/>}}
				/>
				<Redirect to="/shop/products" />
			</Switch>

		componentDidMount() {
			this.props.loadData(DataTypes.CATEGORIES);
			this.props.loadData(DataTypes.PRODUCTS)
		}
	}
)