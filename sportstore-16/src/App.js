import React, {Component} from "react";
import {Provider} from "react-redux";
import {SportsStoreDataStore} from "./data/DataStore";
import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {ShopConnector} from "./shop/ShopConnector";

export default class App extends Component {
  render() {
    return <Provider store={ SportsStoreDataStore }>
      <Router>
        <Switch>
          <Route path="/shop" component={ ShopConnector }/>
          <Redirect to="/shop"/>
        </Switch>
      </Router>
    </Provider>
  }
}
