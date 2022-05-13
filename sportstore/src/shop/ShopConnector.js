import { Routes, Route, Navigate } from "react-router-dom";
import  { loadData } from "../data/ActionCreators";
import { connect } from "react-redux";
import React, {Component} from "react";


const mapStateToProps = (dataStore) => ({
	...dataStore
})

const mapDispatchToProps = {
	loadData
}

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
	class extends Component {
		render = () =>
			<Routes>
				<Route path="/shop/products/category?"
				       render={(routeProps) => {console.log(routeProps)}}
				       element={ <Navigate to="/shop/products"/> }/>
			</Routes>
		componentDidUpdate(prevProps, prevState, snapshot) {
		}
	}
)