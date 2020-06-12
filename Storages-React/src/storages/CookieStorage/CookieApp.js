import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cookie from "js-cookie";

import "./styles.css";
import Login from "./login";
import Home from "./home";

class CookieApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: "NOT_LOGGED_IN"
    };
  }

  handleSuccess = () => {
    this.setState({
      loggedIn: "LOGGED_IN"
    });
  };

  handleUnsuccess = () => {
    this.setState({
      loggedIn: "NOT_LOGGED_IN"
    });
  };

  authorizedPages = () => {
    return [
      <Route
        key={"home"}
        path="/"
        render={props => (
          <Home {...props} handleLogout={this.handleUnsuccess} />
        )}
      />
    ];
  };

  componentDidMount = () => {
    if (
      Cookie.get("username") === "Mahi" &&
      Cookie.get("password") === "1234"
    ) {
      this.handleSuccess();
    } else {
      this.handleUnsuccess();
    }
  };

  componentDidMount() {
    this.checkLogin();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              {this.state.loggedIn === "LOGGED_IN" ? (
                this.authorizedPages()
              ) : (
                <Route
                  path="/"
                  render={props => (
                    <Login
                      {...props}
                      handleSuccess={this.handleSuccess}
                      handleUnsuccess={this.handleUnsuccess}
                    />
                  )}
                />
              )}
            </Switch>
          </div>
        </BrowserRouter>
        <h1>{this.state.loggedIn}</h1>
      </div>
    );
  }
}

export default CookieApp;
