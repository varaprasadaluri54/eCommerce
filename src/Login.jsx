import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <div>
        <h4 className="m-1 p-2 border-bottom"> Login</h4>
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="mail"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>

        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <div className="text-center">
            {this.state.message}
            <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  onLoginClick = async () => {
    console.log(this.state);
    var response = await fetch(
      `https://api.jsonbin.io/b/62655cc738be296761f76d76/6?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );
    var body = await response.json();
    console.log(body);
    if (body.length > 0) {
      this.setState({
        message: <span className="text-success">Successfully Logged-in</span>
      });
    } else {
      this.setState({
        message: (
          <span className="text-danger">Invalid Login, Please try again</span>
        )
      });
    }
  };
}
// https://api.jsonbin.io/b/62655bd9019db4679690ea2e
