import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "new Delhi" },
        photo: "https://picsum.photos/id/1010/60"
      },
      {
        id: 2,
        name: "jones",
        phone: "982-956",
        address: { city: "hyd" },
        photo: "https://picsum.photos/id/1010/60"
      },
      {
        id: 3,
        name: "Allen",
        phone: "889-556",
        address: { city: "Telengana" },
        photo: "https://picsum.photos/id/1010/60"
      },
      {
        id: 4,
        name: "James",
        phone: "552-901",
        address: { city: "Ap" },
        photo: "https://picsum.photos/id/1010/60"
      },
      {
        id: 5,
        name: "John",
        phone: "",
        address: { city: "Andhra" },
        photo: "https://picsum.photos/id/1010/60"
      }
    ]
  };

  customerNameStyle = (custName) => {
    if (custName.startsWith("S")) return { backgroundColor: "green" };
    else if (custName.startsWith("J")) return { backgroundColor: "red" };
    else return {};
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge  badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({
      customersCount: 7
    });
  };
  getPhoneToRender = (phone) => {
    return phone ? phone : <div className="bg-warning p-2">No phone</div>;
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="photo" />
          </td>
          <td
            style={customerNameStyle(cust.name)}
          >
            {cust.name}
          </td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
}
