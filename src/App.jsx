import React, { Component } from "react";
// import MainContent from "./MainContent";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ShoppingCart />
      </>
    );
  }
}
