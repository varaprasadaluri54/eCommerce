import React, { Component } from "react";
import CustomersList from "./CustomerList";
import Dashboard from "./Dashboard";
import Login from "./Login";
// import MainContent from "./MainContent";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<CustomersList />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
