import React from "react";
import UserService from "../services/UserService";

class RegisterContainer extends React.Component {

    state = {
        userName: "",
        password: "",
        verifyPassword: ""
    }

    handleInputChange = (state) => {
        this.setState(state);
    }

    registerUser = () => {
        if (this.state.password === this.state.verifyPassword) {
            UserService.registerUser({
                userName: this.state.userName,
                password: this.state.password
            }).then(response => this.props.history.push("/home"))
        }
    }

    render() {
        return (
            <div class="wbdv-register-container container">
                  <h1>Sign Up</h1>
                  <form class="wbdv-register-form" action="/profile/profile.template.client.html">
                    <div class="form-group row wbdv-username-container">
                      <label for="username" class="col-sm-2 col-form-label">
                        Username </label>
                      <div class="col-sm-10">
                        <input class="form-control wbdv-field wbdv-username"
                               id="username"
                               placeholder="Username"
                               onChange={(e) => {
                                  const state = {...this.state, userName: e.target.value};
                                  this.handleInputChange(state);
                               }}/>
                      </div>
                    </div>
                    <div class="form-group row wbdv-password-container">
                      <label for="password" class="col-sm-2 col-form-label">
                        Password </label>
                      <div class="col-sm-10">
                        <input type="password" class="form-control wbdv-field wbdv-password"
                               id="password" placeholder="Password"
                               onChange={(e) => {
                                  const state = {...this.state, password: e.target.value};
                                  this.handleInputChange(state);
                               }}/>
                      </div>
                    </div>
                    <div class="form-group row wbdv-password-verify-container">
                      <label for="password-verify" class="col-sm-2 col-form-label">
                        Verify Password </label>
                      <div class="col-sm-10">
                        <input type="password" class="form-control wbdv-field wbdv-password-verify"
                               id="password-verify" placeholder="Verify Password"
                               onChange={(e) => {
                                  const state = {...this.state, verifyPassword: e.target.value};
                                  this.handleInputChange(state);
                               }}/>
                      </div>
                    </div>
                    <div class="form-group row wbdv-cta-container">
                      <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary btn-block wbdv-button wbdv-register">Sign up</button>
                        <div class="row">
                          <div class="col-6 wbdv-login-container">
                            <a class="wbdv-link wbdv-login" href="../login/login.template.client.html">Login</a>
                          </div>
                          <div class="col-6 cancel-container">
                            <a class="cancel-link" href="../index.html">Cancel</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
        )
    }
}

export default RegisterContainer