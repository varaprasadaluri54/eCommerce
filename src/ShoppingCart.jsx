import React, { Component } from "react";

import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: []
  };

  render() {
    // console.table(this.state.products)
    return (
      <div>
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

  componentDidMount = async () => {
    var response = await fetch(
      "https://api.jsonbin.io/b/6265575738be296761f769fc/2",
      {
        method: "GET"
      }
    );
    var prods = await response.json();
    console.log(prods);
    this.setState({ products: prods });
  };

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
