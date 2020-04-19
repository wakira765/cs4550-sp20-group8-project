import React from "react";
import {Link} from "react-router-dom";
import UserService from "../services/UserService";

class RegisterContainer extends React.Component {

    state = {
        userName: "",
        password: "",
        verifyPassword: "",
        isDoctor: false,
        medicalID: ""
    }

    handleInputChange = (state) => {
        this.setState(state);
    }

    handleRegisterUser = () => {
        if (this.state.password === this.state.verifyPassword) {
            UserService.registerUser({
                userName: this.state.userName,
                password: this.state.password,
                isDoctor: this.state.isDoctor,
                medicalID: this.state.medicalID
            }).then(response => this.props.history.push("/home"))
        } else {
            alert("passwords do not match!")
        }
    }

    render() {
        return (
            <div className="wbdv-register-container container">
                <h1>Sign Up</h1>
                <div className="form-group row wbdv-username-container">
                  <label htmlFor="username" className="col-sm-2 col-form-label">
                    Username
                  </label>
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
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control wbdv-field wbdv-password"
                           id="password" placeholder="Password"
                           onChange={(e) => {
                              const state = {...this.state, password: e.target.value};
                              this.handleInputChange(state);
                           }}/>
                  </div>
                </div>
                <div className="form-group row wbdv-password-verify-container">
                  <label htmlFor="password-verify" className="col-sm-2 col-form-label">
                    Verify Password
                  </label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control wbdv-field wbdv-password-verify"
                           id="password-verify" placeholder="Verify Password"
                           onChange={(e) => {
                              const state = {...this.state, verifyPassword: e.target.value};
                              this.handleInputChange(state);
                           }}/>
                  </div>
                </div>
                <div className="form-group row wbdv-password-verify-container">
                  <label htmlFor="is-doctor" className="col-sm-2 col-form-label">
                    Are you a doctor?
                  </label>
                  <div className="col-sm-10">
                    <select id="is-doctor"
                        className="form-control wbdv-field is-doctor-select"
                        onChange={(e) => {
                           const state = {...this.state, isDoctor: e.target.value === 'true' ? true : false, medicalID: e.target.value === 'false' ? "" : this.state.medicalID};
                           this.handleInputChange(state);
                        }}
                        value={this.state.isDoctor}>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </select>
                  </div>
                </div>
                {this.state.isDoctor === true && <div className="form-group row wbdv-medical-id-container">
                  <label htmlFor="medical-id" className="col-sm-2 col-form-label">
                    Medical ID
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control wbdv-field wbdv-medical-id"
                           id="medical-id" placeholder="Medical ID"
                           onChange={(e) => {
                              const state = {...this.state, medicalID: e.target.value};
                              this.handleInputChange(state);
                           }}/>
                  </div>
                </div>}
                <div className="form-group row wbdv-cta-container">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary btn-block wbdv-button wbdv-register"
                            onClick={this.handleRegisterUser}
                    >Sign up</button>
                    <div className="row">
                      <div className="col-6 login-link-container">
                        <Link className="wbdv-link wbdv-login" to="/login">Login</Link>
                      </div>
                      <div className="col-6 cancel-container">
                        <Link className="cancel-link" to="/">Cancel</Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default RegisterContainer
