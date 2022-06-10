import ApolloClient from "apollo-boost";
import {GraphQlUrl} from "../data/Urls";
import React, {Component} from "react";
import {ApolloProvider} from "react-apollo";
import {OrdersConnector} from "./OrdersConnector";


const graphQlClient = new ApolloClient({
	uri: GraphQlUrl
})

export class Admin extends Component {
	render() {
		return (
			<ApolloProvider client={ graphQlClient }>
				<div className="container-fluid">
					<div className="row">
						<div className="col bg-info text-white">
							<div className="navbar-brand">SPORTS STORE</div>
						</div>
					</div>
					<div className="row">
						<div className="col p-2">
							<OrdersConnector />
						</div>
					</div>
				</div>
			</ApolloProvider>
		)
	}
}
