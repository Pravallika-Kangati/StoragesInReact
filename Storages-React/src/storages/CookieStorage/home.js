import React from "react";
import Cookie from "js-cookie";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: Cookie.get("username"),
      password: Cookie.get("password")
    };
  }

  handleLogout = e => {
    Cookie.remove("username");
    Cookie.remove("password");
    this.props.handleLogout();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3 className="greeting">Hello, {this.state.username}</h3>
        <button
          onClick={e => {
            this.handleLogout(e);
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}
