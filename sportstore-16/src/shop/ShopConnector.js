import {connect} from "react-redux";
import {loadData, placeOrder} from "../data/ActionCreators";
import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Shop} from "./Shop";
import {DataTypes} from "../data/Types";
import {addToCart, clearCart, removeFromCart, updateCartQuantity} from "../data/CartActionCreators";
import {CartDetails} from "./CartDetails";
import {DataGetter} from "../data/DataGetter";
import {Thanks} from "./Thanks";
import {Checkout} from "./Checkout";

const mapStateToProps = (dataSource) => ({...dataSource});
const mapDispatchToProps = { loadData, placeOrder,
	addToCart, updateCartQuantity, removeFromCart, clearCart,
};

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
	class extends Component {
		render = () =>
			<Switch>
				<Redirect from="/shop/products/:category" to="/shop/products/:category/1" exact={ true } />
				<Route path="/shop/products/:category/:page"
				       render={(routeProps) => {
				       	  //console.log("shopconnector props", this.props, routeProps)
					      return  (
						      <DataGetter {...this.props} {...routeProps}>
							      <Shop {...this.props} {...routeProps}/>
						      </DataGetter>
					      )
				       }}/>
				<Route path="/shop/cart" render={(routeProps) => {
					return <CartDetails {...this.props} {...routeProps}/>
				}}/>
				<Route path="/shop/thanks" render={(routeProps) => {
					return <Thanks {...this.props} {...routeProps}/>
				}}/>
				<Route path="/shop/checkout" render={(routeProps) => {
					return <Checkout {...this.props} {...routeProps}/>
				}}/>
				<Redirect to="/shop/products/all/1" />
			</Switch>

		componentDidMount() {
			this.props.loadData(DataTypes.CATEGORIES);
			this.props.loadData(DataTypes.PRODUCTS)
		}
	}
)