import React from "react";
import Cookie from "js-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errorText: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  };

  handleSubmit = event => {
    const { username, password } = this.state;
    event.preventDefault();
    if (username === "Mahi" && password === "1234") {
      Cookie.set("username", username, { expires: 14 });
      Cookie.set("password", password, { expires: 14 });
      this.props.handleSuccess();
      this.props.history.push("/");
    } else {
      this.setState({
        errorText: "Wrong Username or Password"
      });
      this.props.handleUnsuccess();
    }
  };

  render() {
    return (
      <div>
        <h1>Hello User login</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          /><br/>

          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          /><br/>

          <button type="submit">Login</button>
        </form>
        <p className="login-error">{this.state.errorText}</p>
      </div>
    );
  }
}

export default Login;
