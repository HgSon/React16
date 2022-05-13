import React, { Component } from "react";
import { Provider } from "react-redux";
import { SportsStoreDataStore} from "./data/DataStore";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";

export default class App extends Component {

  render = () =>
      <Provider store={ SportsStoreDataStore }>
        <Router>
          <Routes>
            <Route path="/shop" element={ ShopConnector } />
            <React.Fragment>
                <Navigate to="/shop"/>
            </React.Fragment>
          </Routes>
        </Router>
      </Provider>
}