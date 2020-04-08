import React from "react";

class LoginContainer extends React.Component {

    state = {
        userName: "",
        password: ""
    };


    render() {
        return (
            <div class="wbdv-login-container container">
              <h1>Sign In</h1>
              <form class="wbdv-login-form" action="/profile/profile.template.client.html">
                <div class="form-group row wbdv-username-container">
                  <label for="username" class="col-sm-2 col-form-label">
                    Username </label>
                  <div class="col-sm-10">
                    <input class="form-control wbdv-field wbdv-username"
                           id="username"
                           placeholder="Username"/>
                  </div>
                </div>
                <div class="form-group row wbdv-password-container">
                  <label for="password" class="col-sm-2 col-form-label">
                    Password </label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control wbdv-field wbdv-password"
                           id="password" placeholder="Password"/>
                  </div>
                </div>
                <div class="form-group row wbdv-cta-container">
                  <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary btn-block wbdv-button wbdv-login">Sign in</button>
                    <div class="row">
                      <div class="col-6 wbdv-forgot-password-container">
                        <a class="wbdv-link wbdv-forgot-password" href="#">Forgot Password?</a>
                      </div>
                      <div class="col-6 wbdv-register-container">
                        <a class="wbdv-link wbdv-register float-right" href="../register/register.template.client.html">Sign up</a>
                      </div>
                    </div>
                    <div class="row">
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

export default LoginContainer