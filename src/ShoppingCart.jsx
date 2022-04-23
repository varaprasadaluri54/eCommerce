import React, { Component } from "react";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iphone", price: 8900, quantity: 0 },
      { id: 2, productName: "sony", price: 4500, quantity: 0 },
      { id: 3, productName: "Samsung", price: 7745, quantity: 0 }
    ]
  };

  render() {
    return (
      <div>
        <h4>shopping cart</h4>
      </div>
    );
  }
}
