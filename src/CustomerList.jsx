import React, { Component } from "react";

export default class CustomersList extends Component {
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

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge  bg-secondary m-2">
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
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="photo1" />
            <div>
              <button
                className="btn btn-sm btn-secondray"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";
    this.setState({ customers: custArr });
  };
}
