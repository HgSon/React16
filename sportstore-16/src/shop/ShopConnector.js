import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import {CartDetails} from "./CartDetails";
import {Checkout} from "./Checkout";
import {Shop} from "./Shop";
import {Thanks} from "./Thanks";
import * as ShopActions from "../data/ActionCreators";
import * as CartActions from "../data/CartActionCreators";
import {DataGetter} from "../data/DataGetter";
import {DataTypes} from "../data/Types";

const mapDispatchToProps = { ...ShopActions, ...CartActions };

export const ShopConnector = connect(dataSource => dataSource, mapDispatchToProps)(
	class extends Component {
		constructor(props) {
			super(props);
			console.log("ShopConnector",this.props);
		}

		selectComponent = (routeProps) => {
			const wrap = (Component, Content) =>
				<Component { ...this.props } { ...routeProps }>
					{ Content && wrap(Content)}
				</Component>

			switch (routeProps.match.params.section) {
				case "products":
					return wrap(DataGetter, Shop)
				case "cart":
					return wrap(CartDetails)
				case "thanks":
					return wrap(Thanks)
				case "checkout":
					return wrap(Checkout)
				default :
					return <Redirect to="/shop/products/all/1" />
			}
		}
		render() {
			//console.log("ShopConnector render",this.props);
			return (
				<Switch>
					<Redirect from="/shop/products/:category" to="/shop/products/:category/1" exact={ true } />
					<Route path="/shop/:section?/:category?/:page?"
					       render={routeProps => this.selectComponent(routeProps)}
					/>
				</Switch>
			)
		}

		componentDidMount = () => this.props.loadData(DataTypes.CATEGORIES)
	}
)