import React from "react";
import {Link} from "react-router-dom";
import UserService from "../services/UserService";

class LoginContainer extends React.Component {

    state = {
        userName: "",
        password: ""
    };

    handleInputChange = (state) => {
        this.setState(state);
    }

    handleLogin = () => {
        UserService.findUserByCredentials(this.state.userName, this.state.password)
            .then(response => this.props.history.push("/home"));
    }

    render() {
        return (
            <div className="wbdv-login-container container">
              <h1>Sign In</h1>
              <form className="wbdv-login-form" action="/profile/profile.template.client.html">
                <div className="form-group row wbdv-username-container">
                  <label htmlFor="username" className="col-sm-2 col-form-label">
                    Username </label>
                  <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="username"
                           placeholder="Username"
                           onChange={(e) => {
                              const state = {...this.state, userName: e.target.value};
                              this.handleInputChange(state);
                           }}/>
                  </div>
                </div>
                <div className="form-group row wbdv-password-container">
                  <label htmlFor="password" className="col-sm-2 col-form-label">
                    Password </label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control wbdv-field wbdv-password"
                           id="password" placeholder="Password"
                           onChange={(e) => {
                              const state = {...this.state, password: e.target.value};
                              this.handleInputChange(state);
                           }}/>
                  </div>
                </div>
                <div className="form-group row wbdv-cta-container">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary btn-block wbdv-button wbdv-login">Sign in</button>
                    <div className="row link-container">
                      <div className="col-6 cancel-container">
                        <Link className="cancel-link" to="/">Cancel</Link>
                      </div>
                      <div className="col-6 register-link-container">
                        <Link className="wbdv-link wbdv-register float-right" to="/register">Sign up</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
        )
    }
}

export default LoginContainer