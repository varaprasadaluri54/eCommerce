import React, { Component } from "react";

import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iphone", price: 8900, quantity: 0 },
      { id: 2, productName: "sony", price: 4500, quantity: 0 },
      { id: 3, productName: "Samsung", price: 7745, quantity: 0 },
      { id: 4, productName: "nokia", price: 8845, quantity: 0 },
      { id: 5, productName: "Xbox", price: 7740, quantity: 0 },
      { id: 6, productName: "mi", price: 1000, quantity: 0 }
    ]
  };

  render() {
    // console.table(this.state.products)
    return (
      <div className="container-fluid">
        <h4>shopping cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    if (window.confirm("Are you sure to delete?")) {
      let allProducts = [...this.state.products];
      let index = allProducts.indexOf(product);
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
